import { Palette } from "lucide-react";

type SkillGroup = {
  title: string;
  items: Badge[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { label: "JavaScript", color: "F7DF1E", text: "111111", logo: "javascript" },
      { label: "TypeScript", color: "3178C6", text: "FFFFFF", logo: "typescript" },
      { label: "React", color: "61DAFB", text: "111111", logo: "react" },
      { label: "Tailwind CSS", color: "06B6D4", text: "111111", logo: "tailwindcss" },
    ],
  },
  {
    title: "Backend & data",
    items: [
      { label: "PHP", color: "777BB4", text: "FFFFFF", logo: "php" },
      { label: "Laravel", color: "FF2D20", text: "FFFFFF", logo: "laravel" },
      { label: "Python", color: "3776AB", text: "FFFFFF", logo: "python" },
      { label: "Flask", color: "333333", text: "FFFFFF", logo: "flask" },
      { label: "Node.js", color: "339933", text: "FFFFFF", logo: "nodedotjs" },
      { label: "Express.js", color: "555555", text: "FFFFFF", logo: "express" },
      { label: "Firebase", color: "DD2C00", text: "FFFFFF", logo: "firebase" },
      { label: "MySQL", color: "4479A1", text: "FFFFFF", logo: "mysql" },
    ],
  },
  {
    title: "Mobile & IoT",
    items: [
      { label: "Java", color: "ED8B00", text: "FFFFFF", logo: "openjdk" },
      { label: "Android", color: "3DDC84", text: "111111", logo: "android" },
    ],
  },
  {
    title: "AI & tooling",
    items: [
      { label: "PyTorch", color: "EE4C2C", text: "FFFFFF", logo: "pytorch" },
      { label: "Docker", color: "2496ED", text: "FFFFFF", logo: "docker" },
    ],
  },
];

type Badge = {
  label: string;
  color: string;
  text: string;
  logo: string;
};
const badgeUrl = ({ label, color, text, logo }: Badge) =>
  `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=flat-square&logo=${logo}&logoColor=${text}&labelColor=${color}&color=${color}`;

function SkillsSection() {
  return (
    <section id="skills" className="section section--cream">
      <div className="section-inner">
        <div className="section-heading">
          <h2>Tools I reach for when building something real.</h2>
          <p>Grouped by where I use them. Most come from coursework, personal builds, and team projects.</p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>
                <Palette size={16} aria-hidden="true" />
                {group.title}
              </h3>
              <div className="badge-grid">
                {group.items.map((item) => (
                  <img
                    key={item.label}
                    src={badgeUrl(item)}
                    alt={item.label}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;