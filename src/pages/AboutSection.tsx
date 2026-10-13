import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "../assets/profile-pic-new.jpg";

const AboutSection = () => (
  <section id="about" className="about-section section section--paper">
    <div className="section-inner about-inner">
      <div className="about-photo-wrap"><img src={profilePhoto} alt="Joy Susette Domingo" className="about-photo" /></div>
      <div className="about-copy">
        <h2>Joy Susette V. Domingo</h2>
        {/* <p>I&apos;m <strong className="emphasis">Joy Susette V. Domingo</strong>, a Cum Laude Computer Science graduate from Batangas State University - The National Engineering University. I&apos;m interested in software development and practical applications that make complex things useful.</p> */}
        <p className="hero-philosphy"><strong className="emphasis">Computer Science </strong> graduate from Batangas State University - The National Engineering University. I&apos;m interested in software development and practical applications that make complex things useful.</p>
        <p>I build from fundamentals: understand the problem, make the system legible, and choose tools that serve the people using it.</p>
        <p>My foundation spans frontend and backend development, data, testing, and UI/UX. I learn quickly, work reliably, and enjoy adapting emerging technologies such as AI when they have a clear, useful role.</p>
        <div className="about-meta"><span>Based in Cabuyao, Laguna</span><span>Open to opportunities</span><span>Computer Science</span></div>
        <div className="about-links"><a href="https://github.com/coochill" target="_blank" rel="noreferrer">GitHub <Github size={15} /></a><a href="https://www.linkedin.com/in/joy-susette-domingo-937759342/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a><a href="mailto:joysusette@gmail.com">Email <Mail size={15} /></a><a href="#projects">See work <ArrowUpRight size={15} /></a></div>
      </div>
    </div>
  </section>
);

export default AboutSection;
