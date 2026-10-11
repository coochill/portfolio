import { ArrowUpRight, Github, Mail } from "lucide-react";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ImageGallery from "../components/ImageGallery";
import graphicOne from "../assets/datu_torch.png";
import graphicTwo from "../assets/bakunawa-animation.gif";
import graphicThree from "../assets/kaprepre.png";
import graphicFour from "../assets/goddess.png";
import graphicFive from "../assets/sword_animation.gif";
import logoOne from "../assets/Geominder-logo.png";
import logoTwo from "../assets/Geominder-logo-2.png";
import logoThree from "../assets/recursive-logo.png";
import logoFour from "../assets/recursive-logo-2.png";


const projects = [
  { number: "01", title: "CodeCrypt v2.0", type: "Educational cipher learning platform · September 2025 - December 2025", description: "An educational web platform for learning cryptography through interactive activities, including MineCipher, a Vigenère cipher learning game with adjustable difficulty.", stack: ["React", "Vite", "Tailwind CSS", "Flask"], url: "https://github.com/coochill/CodeCrypt-v2.0", accent: "#0074d2" },
  { number: "02", title: "GoCery", type: "Android grocery management application · March 2025 - April 2025", description: "An Android grocery management application supporting store and customer workflows, inventory management, purchase history, and Firebase-backed data operations. Includes automated functional and UI testing.", stack: ["Java", "Android Studio", "Firebase Database", "JUnit", "AndroidX Test", "Espresso", "Mockito", "Hamcrest"], url: "https://github.com/MannLester/Go-Cery", accent: "#fffd3c" },
  { number: "03", title: "WattWise", type: "IoT energy monitoring system · February 2026 - May 2026", description: "An IoT-based energy monitoring system that combines real-time electrical data with a web dashboard for monitoring consumption and secure role-based system management.", stack: ["React", "Node.js", "Express.js", "Firebase", "ESP32", "PZEM-004T"], url: "https://github.com/coochill/WattWise", accent: "#fffd61" },
  { number: "04", title: "Neburix", type: "Asthma intelligence and care companion · May 2026", description: "A health companion web application for asthma tracking, combining health logs, medication tracking, data visualization, and nearby hospital information.", stack: ["React 19", "Vite", "Tailwind CSS", "Firebase Auth/Firestore", "Chart.js", "jsPDF", "Flask"], url: "https://github.com/coochill/neburix", accent: "#6197ff" },
  { number: "05", title: "SCB-YOLO - Thesis", type: "Multi-class face accessory detection · September 2025 - May 2026", description: "A computer vision research project for disguised face detection using YOLOv12 with Squeeze-and-Excitation blocks, class-weighted loss, DeepSORT tracking, and Bayesian fusion for video detection refinement. Evaluated on a 7,000-image and 52-video dataset with reported image and video results.", stack: ["YOLOv12", "PyTorch", "SE Blocks", "Class-Weighted Loss", "DeepSORT", "Bayesian Fusion", "Roboflow", "CVAT"], accent: "#7590c5" },
  { number: "06", title: "SchedPx", type: "Patient Scheduling & Case Management System · September 2026", description: "A full-stack patient scheduling and case management system designed to help studentists organize patient records, manage patient cases, track case progress through customizable checklists, and schedule appointments. The system includes configurable case types, patient-specific case records, appointment management, and task tracking.", stack: ["PHP", "Laravel", "React", "MySQL", "REST API", "Docker"], url: "https://github.com/coochill/studentist-scheduler", accent: "#e2d962" },
];

const graphics = [
  { src: graphicOne, alt: "Pixel art torch illustration" },
  { src: graphicTwo, alt: "Animated pixel art creature" },
  { src: graphicThree, alt: "Pixel art character illustration" },
  { src: graphicFour, alt: "Illustrated fantasy character" },
  { src: graphicFive, alt: "Animated pixel art sword" },
];
const logos = [
  { src: logoOne, alt: "GeoMinder logo" },
  { src: logoTwo, alt: "Alternate GeoMinder logo" },
  { src: logoThree, alt: "Recursive algorithm project logo" },
  { src: logoFour, alt: "Alternate recursive algorithm project logo" },
];

const ViberIcon = ({ size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2C6.5 2 2 5.9 2 10.8c0 2.6 1.3 4.9 3.3 6.5L4.5 22l4.9-2.3c.8.2 1.6.3 2.6.3 5.5 0 10-3.9 10-8.8S17.5 2 12 2z" />
    <path
      d="M9.2 7.2c.2-.4.6-.6 1-.5l1 .3c.4.1.6.5.5.9l-.4 1.1c-.1.3-.1.6.1.8l1.6 1.6c.2.2.5.2.8.1l1.1-.4c.4-.1.8.1.9.5l.3 1c.1.4-.1.8-.5 1-.9.5-2 .4-2.9-.2-1.6-1.1-2.9-2.4-3.9-4-.6-.9-.7-2-.2-2.9z"
      style={{ fill: "var(--ink)" }}
    />
  </svg>
);

const Home = () => (
  <main id="top">
    <section className="hero-section hire-hero-section" aria-labelledby="hero-title">
  <div className="hero-inner hire-hero">
    <div className="hero-copy">
      <div className="status-pill">
        <span className="status-dot" aria-hidden="true" />
        Open to junior software engineering roles
      </div>
      <p className="eyebrow">Junior software engineer</p>
      <h1 id="hero-title">Finding <span className="hero-word-accent">joy</span> in solving problems.</h1>
      <p className="hero-philosophy">
        I build web, Android, and IoT systems, and I care about the parts people don't see: clean logic, tested code, and data that makes sense.
      </p>
      <div className="hero-actions">
        <a className="button button--dark" href="#projects">See what I've built</a>
        <a className="button button--outline" href="#contact">Hire me</a>
      </div>
    </div>

    <aside className="quest-card" aria-label="Quick profile">
      <div className="quest-card__head">
        <span>Player profile</span>
        <span>Lv. 1</span>
      </div>
      <dl>
        <div>
          <dt>Class</dt>
          <dd>Junior software engineer</dd>
        </div>
        <div>
          <dt>Specialty</dt>
          <dd>Full-stack web, Android</dd>
        </div>
        <div>
          <dt>Core stack</dt>
          <dd>PHP · Laravel · Python · React · Flask · Firebase · JavaScript</dd>
        </div>
        <div>
          <dt>Current quest</dt>
          <dd>A team that ships real products and cares about how they're built</dd>
        </div>
      </dl>
    </aside>
  </div>
</section>

    <AboutSection />

    <section id="projects" className="section section--ink">
      <div className="section-inner">
        <div className="section-heading section-heading--light">
          <p className="eyebrow-diff">Selected work</p>
          <h2>Projects with a purpose behind the interface.</h2>
          <p>A small selection of collaborative, academic, and independent work. Each one started with a problem worth understanding.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
                        <article className="project-card" key={project.title}>
              <div className="project-card__top">
                <span>{project.number}</span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <Github size={19} />
                  </a>
                )}
              </div>

              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-card__bottom">
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Repository <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <SkillsSection />

    <section id="bonus" className="section section--paper">
      <div className="section-inner">
        <div className="section-heading"><h2>A little room for visual experiments.</h2><p>Graphic studies and identity work live here, intentionally kept secondary to the software projects.</p></div>
        <div className="bonus-gallery"><ImageGallery title="Graphic studies" items={graphics} /><ImageGallery title="Project marks" items={logos} /></div>
      </div>
    </section>

    <footer id="contact" className="site-footer">
        <div className="footer-contact">
          <a href="mailto:joysusette@gmail.com">
            <Mail size={30} aria-hidden="true" /> joysusette@gmail.com
          </a>
          <a href="tel:+639759663135">
            <ViberIcon /> Viber: 09759663135
          </a>
      </div>
    </footer>
  </main>
);

export default Home;
