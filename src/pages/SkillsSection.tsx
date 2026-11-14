import type { CSSProperties } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { Code2, Database, Smartphone, Brain, type LucideIcon } from "lucide-react";

// Loads every SVG in src/assets/tools as a URL, keyed by path
const iconFiles = import.meta.glob("../assets/tools/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const iconUrl = (slug: string) => iconFiles[`../assets/tools/${slug}.svg`];

type Tool = {
  label: string;
  slug: string; // must match the SVG filename
  color: string; // brand hex, without the #
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  tools: Tool[];
};

// Edit this array to add, remove, or regroup tools
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    tools: [
      { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { label: "TypeScript", slug: "typescript", color: "3178C6" },
      { label: "React", slug: "react", color: "61DAFB" },
      { label: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    title: "Backend & data",
    icon: Database,
    tools: [
      { label: "PHP", slug: "php", color: "777BB4" },
      { label: "Laravel", slug: "laravel", color: "FF2D20" },
      { label: "Python", slug: "python", color: "3776AB" },
      { label: "Flask", slug: "flask", color: "333333" },
      { label: "Node.js", slug: "nodejs", color: "339933" },
      { label: "Express.js", slug: "express", color: "555555" },
      { label: "Firebase", slug: "firebase", color: "DD2C00" },
      { label: "MySQL", slug: "mysql", color: "4479A1" },
    ],
  },
  {
    title: "Mobile & IoT",
    icon: Smartphone,
    tools: [
      { label: "Java", slug: "java", color: "ED8B00" },
      { label: "Android", slug: "android", color: "3DDC84" },
    ],
  },
  {
    title: "AI & tooling",
    icon: Brain,
    tools: [
      { label: "PyTorch", slug: "pytorch", color: "EE4C2C" },
      { label: "Docker", slug: "docker", color: "2496ED" },
    ],
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Entrance: categories stagger 0.1s apart
const groupStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const groupItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// Entrance: tiles in each category cascade at 0.03s.
// The custom index delays each category's grid to match its stagger.
const tileStagger: Variants = {
  hidden: {},
  show: (groupIndex: number) => ({
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.15 + groupIndex * 0.1,
    },
  }),
};

const tile: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE_OUT } },
  hover: {},
};

// Hover: icon lifts with a snappy spring
const icon: Variants = {
  hidden: {},
  show: {},
  hover: {
    y: -3,
    scale: 1.06,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

// Hover: radial glow fades in behind the icon

function SkillsSection() {
  return (
    <section id="skills" className="section section--cream">
      <div className="section-inner">
        <div className="section-heading">
          <h2>Tools I reach for when building something real.</h2>
          <p>
            Grouped by where I use them. Most come from coursework, personal builds, and team
            projects.
          </p>
        </div>

        <MotionConfig reducedMotion="user">
          <motion.div
            className="skill-groups"
            variants={groupStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillGroups.map((group, groupIndex) => (
              <motion.div className="skill-group" key={group.title} variants={groupItem}>
                <h3>
                  <group.icon size={16} aria-hidden="true" />
                  {group.title}
                </h3>

                <motion.div className="tool-grid" variants={tileStagger} custom={groupIndex}>
                  {group.tools.map((tool) => (
                    <motion.div
                      key={tool.label}
                      className="tool-tile group"
                      style={{ "--brand": `#${tool.color}` } as CSSProperties}
                      variants={tile}
                      whileHover="hover"
                    >
                      <div className="tool-tile__media">
                        <span className="tool-tile__glow" aria-hidden="true" />
                        <motion.img
  src={iconUrl(tool.slug)}
  alt=""
  className="tool-tile__icon"
  variants={icon}
  loading="lazy"
/>
                      </div>
                      <span className="tool-tile__label">{tool.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
}

export default SkillsSection;