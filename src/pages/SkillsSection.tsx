import { Braces, Database, Palette } from "lucide-react";

const badges = [
  { label: "JavaScript", color: "F7DF1E", text: "111111" },
  { label: "Python", color: "3776AB", text: "FFFFFF" },
  { label: "React", color: "61DAFB", text: "111111" },
  { label: "Tailwind CSS", color: "06B6D4", text: "FFFFFF" },
  { label: "Flask", color: "111111", text: "FFFFFF" },
  { label: "Node.js", color: "339933", text: "FFFFFF" },
  { label: "Express.js", color: "111111", text: "FFFFFF" },
  { label: "Firebase", color: "FFCA28", text: "111111" },
  { label: "MySQL", color: "4479A1", text: "FFFFFF" },
];

function SkillsSection() {
  return (
    <section id="skills" className="section section--cream">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">02 / toolkit</p>
          <h2>Tools for thoughtful, useful software.</h2>
          <p>Technologies I have worked with across coursework, personal builds, and collaborative projects.</p>
        </div>
        <div className="skills-layout">
          <div className="skill-note">
            <Palette size={22} aria-hidden="true" />
            <p>Technical work with a visual point of view.</p>
            <span>Design and development belong in the same conversation.</span>
          </div>
          <div className="badge-grid" aria-label="Technology badges">
            {badges.map((badge) => (
              <img
                key={badge.label}
                src={`https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?style=flat-square&logo=${encodeURIComponent(badge.label.toLowerCase())}&logoColor=${badge.text}&labelColor=${badge.color}&color=${badge.color}`}
                alt={badge.label}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="skill-columns">
          <div><Braces size={18} aria-hidden="true" /><strong>Application development</strong><span>React, JavaScript, Python, Flask, Node.js, Express.js</span></div>
          <div><Database size={18} aria-hidden="true" /><strong>Data and services</strong><span>Firebase, MySQL, REST APIs</span></div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;