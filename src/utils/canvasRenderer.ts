
export function drawFrame(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement | undefined,
) {
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  if (
    image &&
    image.complete &&
    image.naturalWidth > 0 &&
    image.naturalHeight > 0
  ) {
    const scale = Math.max(
      rect.width / image.naturalWidth,
      rect.height / image.naturalHeight,
    );

    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;

    const x = (rect.width - drawWidth) / 2;
    const y = (rect.height - drawHeight) / 2;

    ctx.drawImage(image, x, y, drawWidth, drawHeight);
    return;
  }

  drawFallback(ctx, rect.width, rect.height);
}

function drawFallback(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, "#082f49");
  gradient.addColorStop(0.5, "#087e8b");
  gradient.addColorStop(1, "#dceff2");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(
    width * 0.7,
    height * 0.35,
    0,
    width * 0.7,
    height * 0.35,
    Math.max(width, height) * 0.65,
  );

  glow.addColorStop(0, "rgba(255,255,255,0.22)");
  glow.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}
