import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "../assets/profile-photo.jpg";

const AboutSection = () => (
  <section id="about" className="about-section section section--paper">
    <div className="section-inner about-inner">
      <div className="about-photo-wrap"><img src={profilePhoto} alt="Joy Susette Domingo" className="about-photo" /></div>
      <div className="about-copy">
        <p className="eyebrow">About me</p>
        <h2>Curious by default. Careful by design.</h2>
        <p>I am a Computer Science graduate from Batangas State University who enjoys moving between structure and expression: shaping a clear user experience, then building the system that supports it.</p>
        <p>My work spans frontend development, backend development, UI/UX design, and visual experimentation. I am currently open to opportunities where I can keep learning while contributing thoughtfully.</p>
        <div className="about-meta"><span>Based in Cabuyao, Laguna</span><span>Open to opportunities</span><span>Computer Science</span></div>
        <div className="about-links"><a href="https://github.com/coochill" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a><a href="https://www.linkedin.com/in/joy-susette-domingo-937759342/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a><a href="mailto:joysusette@gmail.com">Email <Mail size={15} /></a><a href="#projects">See work <ArrowUpRight size={15} /></a></div>
      </div>
    </div>
  </section>
);

export default AboutSection;
