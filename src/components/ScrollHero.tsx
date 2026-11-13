
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useImageSequence } from "../hooks/useImageSequence";
import { drawFrame } from "../utils/canvasRenderer";
import "./ScrollHero.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;

function ScrollHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const introRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);

  const progressRef = useRef(0);
  const { images, progress, loaded, failed } = useImageSequence();

  const imagesRef = useRef(images);
  imagesRef.current = images;

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderFrame = (progressValue: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const frames = imagesRef.current;
    const index = Math.round(
      Math.min(Math.max(progressValue, 0), 1) * (FRAME_COUNT - 1),
    );

    let image = frames[index];

    if (!image) {
      for (let offset = 1; offset < frames.length; offset++) {
        image = frames[index - offset] ?? frames[index + offset];
        if (image) break;
      }
    }

    drawFrame(canvas, image);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      renderFrame(progressRef.current);
    });

    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    renderFrame(progressRef.current);
  }, [progress]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;
    const middle = middleRef.current;
    const outro = outroRef.current;

    if (!wrapper || !stage || !intro || !middle || !outro) return;

    if (reducedMotion) {
      renderFrame(0);
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        progressRef,
        {
          current: 1,
          duration: 1,
          ease: "none",
          onUpdate: () => renderFrame(progressRef.current),
        },
        0,
      );

      timeline.fromTo(
        intro,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -70, duration: 0.3 },
        0.15,
      );

      timeline.fromTo(
        middle,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.35,
      );

      timeline.to(
        middle,
        { opacity: 0, y: -60, duration: 0.3 },
        0.65,
      );

      timeline.fromTo(
        outro,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.7,
      );

      timeline.to(
        stage,
        {
          scale: 0.94,
          clipPath: "inset(4% 3% 4% 3% round 28px)",
          duration: 0.15,
        },
        0.85,
      );

      ScrollTrigger.refresh();
    }, wrapper);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} className="scroll-hero-wrapper">
      <section
        ref={stageRef}
        className="scroll-hero-stage"
        aria-label="Introduction"
      >
        <canvas
          ref={canvasRef}
          className="scroll-hero-canvas"
          aria-hidden="true"
        />

        <div className="scroll-hero-overlay" />

        <div ref={introRef} className="scroll-hero-content scroll-hero-intro">
          <p className="scroll-hero-eyebrow">Junior software engineer</p>
          <h1>
            Finding <span>joy</span> in solving problems.
          </h1>
          <p className="scroll-hero-description">
            I build web, Android, and IoT systems, and I care about the parts
            people don't see: clean logic, tested code, and data that makes
            sense.
          </p>
          <div className="scroll-hero-actions">
            <a className="button button--dark" href="#projects">
  See what I've built
</a>
          </div>
        </div>

        <div ref={middleRef} className="scroll-hero-content scroll-hero-middle">
          <p className="scroll-hero-eyebrow">The person behind the work</p>
          <h2>Curious by nature. Intentional by design.</h2>
          <p>
            I start by understanding the problem, then build systems that are
            useful, understandable, and reliable.
          </p>
        </div>

        <div ref={outroRef} className="scroll-hero-content scroll-hero-outro">
          <p className="scroll-hero-eyebrow">Joy Susette Domingo</p>
          <h2>Let's build something meaningful.</h2>
        </div>

        <div className="scroll-hero-loader" aria-live="polite">
          {loaded ? (
            <span>
              {failed > 0 ? `${failed} frames unavailable` : "Sequence ready"}
            </span>
          ) : (
            <span>Loading sequence {progress}%</span>
          )}
        </div>

        <div className="scroll-hero-scroll-hint">
          <span>Scroll to explore</span>
          <span aria-hidden="true">↓</span>
        </div>
      </section>
    </div>
  );
}

export default ScrollHero;
