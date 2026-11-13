
import { useEffect, useState } from "react";

interface ImageSequenceState {
  images: HTMLImageElement[];
  progress: number;
  loaded: boolean;
  failed: number;
}

const FRAME_COUNT = 120;
const FRAME_PATH = "/frames/frame_";

export function useImageSequence(): ImageSequenceState {
  const [state, setState] = useState<ImageSequenceState>({
    images: [],
    progress: 0,
    loaded: false,
    failed: 0,
  });

  useEffect(() => {
    let cancelled = false;

    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let completed = 0;
    let failed = 0;
    let nextFrame = 0;

    const CONCURRENCY = 8;

    const updateProgress = () => {
      if (cancelled) return;

      setState({
        images: [...images],
        progress: Math.round((completed / FRAME_COUNT) * 100),
        loaded: completed === FRAME_COUNT,
        failed,
      });
    };

    const loadNext = () => {
      if (cancelled) return;

      if (nextFrame >= FRAME_COUNT) return;

      const index = nextFrame++;
      const image = new Image();

      image.onload = () => {
        if (cancelled) return;

        images[index] = image;
        completed++;

        updateProgress();
        loadNext();
      };

      image.onerror = () => {
        if (cancelled) return;

        failed++;
        completed++;

        updateProgress();
        loadNext();
      };

      image.src = `${FRAME_PATH}${String(index + 1).padStart(4, "0")}.webp`;
    };

    for (let i = 0; i < CONCURRENCY; i++) {
      loadNext();
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
