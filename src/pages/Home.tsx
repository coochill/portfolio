import { ArrowDownRight, ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
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

const Home = () => (
  <main id="top">
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science graduate / junior developer</p>
          <h1 id="hero-title">I build software that solves real problems.</h1>
          <p className="hero-intro">I&apos;m <strong>Joy Susette Domingo</strong>, a Cum Laude Computer Science graduate from Batangas State University - The National Engineering University. I build web applications, backend systems, and practical software projects using technologies like React, Python, Flask, Node.js, and Firebase.</p>
          <p className="hero-intro">From interactive learning platforms to IoT systems and computer vision research, I enjoy turning ideas into working software with attention to both how it works and how people use it.</p>
          <div className="hero-actions">
            <a className="button button--dark" href="#projects">View selected work <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="text-link" href="mailto:joysusette@gmail.com">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Availability and location">
          <div className="hero-stamp">JS<span>24</span></div>
          <p>Open to opportunities<br />in software and product work.</p>
          <div className="hero-location"><MapPin size={15} aria-hidden="true" /> Cabuyao, Laguna, PH</div>
        </div>
      </div>
      <div className="hero-footer"><span>01 / 04</span><span>Scroll to explore</span><span className="hero-line" /></div>
    </section>

    <AboutSection />

    <section id="projects" className="section section--ink">
      <div className="section-inner">
        <div className="section-heading section-heading--light">
          <p className="eyebrow">01 / selected work</p>
          <h2>Projects with a purpose behind the interface.</h2>
          <p>A small selection of collaborative, academic, and independent work. Each one started with a problem worth understanding.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              style={{ backgroundColor: project.accent }}
              key={project.title}
            >
              <div className="project-card__top"><span>{project.number}</span>{project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Github size={19} /></a>}</div>
              <div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div>
              <div className="project-card__bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="project-link">Repository <ArrowUpRight size={15} /></a>}</div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <SkillsSection />

    <section id="bonus" className="section section--paper">
      <div className="section-inner">
        <div className="section-heading"><p className="eyebrow">03 / bonus</p><h2>A little room for visual experiments.</h2><p>Graphic studies and identity work live here, intentionally kept secondary to the software projects.</p></div>
        <div className="bonus-gallery"><ImageGallery title="Graphic studies" items={graphics} /><ImageGallery title="Project marks" items={logos} /></div>
      </div>
    </section>

    <footer className="site-footer"><div><p className="eyebrow">Let&apos;s make something useful.</p><h2>Have a project in mind?</h2></div><a className="button button--light" href="mailto:joysusette@gmail.com"><Mail size={17} aria-hidden="true" /> Email Joy</a></footer>
  </main>
);

export default Home;
