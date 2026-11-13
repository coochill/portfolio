
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PinnedProject.css";

gsap.registerPlugin(ScrollTrigger);

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
                <p className="pinned-project-card__type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="pinned-project-card__description">
                  {project.description}
                </p>
              </div>

              <div className="pinned-project-card__bottom">
                <div className="pinned-project-card__stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PinnedProjects;
