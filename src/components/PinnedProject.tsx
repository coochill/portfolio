
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import "./PinnedProject.css";

gsap.registerPlugin(ScrollTrigger);

const erpflowImages = import.meta.glob<string>(
  "../assets/projects/erpflow/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" },
);

const schedpxImages = import.meta.glob<string>(
  "../assets/projects/schedpx/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" },
);

const sortImageEntries = (entries: Record<string, string>) =>
  Object.entries(entries).sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  );

const erpflowScreenshots = sortImageEntries(erpflowImages).map(([, src]) => src);
const schedpxScreenshots = sortImageEntries(schedpxImages).map(([, src]) => src);

const filenameFromSource = (source: string) =>
  decodeURIComponent(source.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Screenshot")
    .replace(/[-_]+/g, " ");

interface ProjectScreenshotGalleryProps {
  projectTitle: string;
  images: string[];
}

function ProjectScreenshotGallery({
  projectTitle,
  images,
}: ProjectScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((index) => {
          if (index === null) return null;
          const nextIndex = (index - 1 + images.length) % images.length;
          setActiveIndex(nextIndex);
          return nextIndex;
        });
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((index) => {
          if (index === null) return null;
          const nextIndex = (index + 1) % images.length;
          setActiveIndex(nextIndex);
          return nextIndex;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, isOpen]);

  if (images.length === 0) return null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxIndex(index);
  };

  const stepLightbox = (delta: number) => {
    setLightboxIndex((index) => {
      if (index === null) return null;
      const nextIndex = (index + delta + images.length) % images.length;
      setActiveIndex(nextIndex);
      return nextIndex;
    });
  };

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="project-screenshot-gallery">
      <button
        type="button"
        className="project-screenshot-gallery__preview"
        onClick={() => openLightbox(activeIndex)}
        aria-label={`Open ${projectTitle} screenshot ${activeIndex + 1} of ${images.length}`}
      >
        <img
          src={images[activeIndex]}
          alt={`${projectTitle} screenshot ${activeIndex + 1}`}
        />
        <span className="project-screenshot-gallery__counter">
          {activeIndex + 1} / {images.length}
        </span>
        <span className="project-screenshot-gallery__expand" aria-hidden="true">
          <Expand size={16} />
        </span>
      </button>

      {images.length > 1 && (
        <div className="project-screenshot-gallery__thumbs" aria-label="Screenshot previews">
          {images.slice(0, 4).map((image, index) => (
            <button
              type="button"
              key={image}
              className={
                index === activeIndex
                  ? "project-screenshot-gallery__thumb is-active"
                  : "project-screenshot-gallery__thumb"
              }
              onClick={() => openLightbox(index)}
              aria-label={`Open ${filenameFromSource(image)} screenshot`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}

      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#082f49]/95 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot viewer`}
          onClick={closeLightbox}
        >
          <div
            className="relative flex h-full max-h-full w-full max-w-[1200px] flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-0 top-0 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-[#cde2e6]/30 bg-[#0b3a53] text-[#dceff2]"
              onClick={closeLightbox}
              aria-label="Close screenshot viewer"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="flex min-h-0 flex-1 items-center justify-center">
              <img
                src={images[lightboxIndex]}
                alt={`${projectTitle} screenshot ${lightboxIndex + 1}`}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
            </div>

            <div className="mt-3 flex items-center gap-3 text-[#dceff2]">
              <button
                type="button"
                className="project-lightbox__nav"
                onClick={() => stepLightbox(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <span className="min-w-12 text-center font-mono text-xs">
                {lightboxIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                className="project-lightbox__nav"
                onClick={() => stepLightbox(1)}
                aria-label="Next screenshot"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="project-lightbox__thumbs" aria-label="Choose screenshot">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={index === lightboxIndex ? "is-active" : ""}
                  onClick={() => {
                    setLightboxIndex(index);
                    setActiveIndex(index);
                  }}
                  aria-label={`View screenshot ${index + 1}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  url?: string;
  accent: string;
}

interface PinnedProjectsProps {
  projects: Project[];
}

function PinnedProjects({ projects }: PinnedProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage || projects.length === 0) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      ".pinned-project-card",
      stage,
    );

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          gsap.set(cards, {
            yPercent: 100,
            autoAlpha: 0,
          });

          gsap.set(cards[0], {
            yPercent: 0,
            autoAlpha: 1,
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: () =>
                `+=${window.innerHeight * (projects.length - 1)}`,
              scrub: 1,
              pin: stage,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          cards.forEach((card, index) => {
            if (index === 0) return;

            timeline
              .to(
                cards[index - 1],
                {
                  yPercent: -12,
                  autoAlpha: 0,
                  duration: 0.45,
                  ease: "none",
                },
                index - 1,
              )
              .to(
                card,
                {
                  yPercent: 0,
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "none",
                },
                index - 1,
              );
          });
        }, section);

        return () => ctx.revert();
      },
    );

    return () => mm.revert();
  }, [projects]);

  return (
    <section
      id="projects"
      className="pinned-projects"
      ref={sectionRef}
    >
      <div className="pinned-projects__inner">
        <header className="pinned-projects__heading">
          <p className="pinned-projects__eyebrow">
            Selected work / 2025—2026
          </p>

          <h2>
            Projects with a purpose
            <span> behind the interface.</span>
          </h2>

          <p className="pinned-projects__intro">
            A selection of collaborative, academic, and independent
            work. Each one started with a problem worth understanding.
          </p>
        </header>

        <div className="pinned-projects__stage" ref={stageRef}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const screenshots =
    project.title === "ERPFlow"
      ? erpflowScreenshots
      : project.title === "SchedPx"
        ? schedpxScreenshots
        : [];

  return (
            <article
              className="pinned-project-card"
              key={project.title}
              style={
                {
                  "--project-accent": project.accent,
                } as React.CSSProperties
              }
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pinned-project-card__link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span className="sr-only">
                    View {project.title} on GitHub
                  </span>
                </a>
              )}

              <div className="pinned-project-card__top">
                <span className="pinned-project-card__number">
                  {project.number}
                </span>
                <span className="pinned-project-card__github-label">
                  View on GitHub ↗
                </span>
              </div>

              <div className="pinned-project-card__content">
                <div className="pinned-project-card__copy">
                  <p className="pinned-project-card__type">
                    {project.type}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="pinned-project-card__description">
                    {project.description}
                  </p>
                </div>

                {screenshots.length > 0 && (
                  <ProjectScreenshotGallery
                    projectTitle={project.title}
                    images={screenshots}
                  />
                )}
              </div>

              <div className="pinned-project-card__bottom">
                <div className="pinned-project-card__stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
  );
}

export default PinnedProjects;
