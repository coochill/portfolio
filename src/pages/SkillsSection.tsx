import { motion } from "framer-motion";
import { Paintbrush, Code, Database, Sparkles } from "lucide-react";
import ImageGallery from "../components/ImageGallery";

import img1 from "../assets/datu_torch.png";
import img2 from "../assets/bakunawa-animation.gif";
import img3 from "../assets/kaprepre.png";
import img4 from "../assets/goddess.png";
import img5 from "../assets/sword_animation.gif";
import img6 from "../assets/Geominder-logo.png";
import img7 from "../assets/Geominder-logo-2.png";
import img8 from "../assets/recursive-logo.png";
import img9 from "../assets/recursive-logo-2.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, ease: "easeOut" },
  }),
};

const GraphicsItems = [
  { src: img1, alt: "Graphic 1" },
  { src: img2, alt: "Graphic 2" },
  { src: img3, alt: "Graphic 3" },
  { src: img4, alt: "Graphic 4" },
  { src: img5, alt: "Graphic 5" },
];

const LogoItems = [
  { src: img6, alt: "Graphic 6" },
  { src: img7, alt: "Graphic 7" },
  { src: img8, alt: "Graphic 8" },
  { src: img9, alt: "Graphic 9" },
];

function SkillsSection() {
  const cards = [
    {
      title: "Design Skills",
      color: "from-teal-400 to-cyan-500",
      textColor: "text-teal-400",
      icon: <Paintbrush size={26} />,
      items: ["UI/UX Design", "Graphic Assets Design"],
    },
    {
      title: "Development",
      color: "from-indigo-400 to-blue-500",
      textColor: "text-indigo-400",
      icon: <Code size={26} />,
      items: ["React", "Tailwind CSS", "Flask"],
    },
    {
      title: "Database",
      color: "from-yellow-400 to-orange-500",
      textColor: "text-yellow-400",
      icon: <Database size={26} />,
      items: ["Firebase", "MySQL"],
    },
    {
      title: "Tools I Want to Learn",
      color: "from-pink-400 to-purple-500",
      textColor: "text-pink-400",
      icon: <Sparkles size={26} />,
      items: ["Unreal Engine", "Photoshop", "Blender"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md flex flex-col items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
      }}
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Skills &
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertise
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical abilities and creative passion
          </p>
        </div>

        {/* Modern Card Layout for Skills */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-800 mb-16">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={cardVariants}
              >
                {/* Card Header with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} rounded-xl opacity-10`}></div>
                  <div className={`relative flex items-center gap-4 p-4 ${card.textColor}`}>
                    <div className={`bg-gradient-to-r ${card.color} p-3 rounded-xl text-black`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color}`}></div>
                      <span className="text-lg text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sample Artworks Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-800 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Sample Graphic
              </span>{" "}
              Artworks
            </h3>
          </div>
          
          <ImageGallery title="" items={GraphicsItems} />
          
          <div className="mt-8 bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <p className="text-center text-lg text-gray-300 leading-relaxed">
              Made with{" "}
              <span className="text-orange-400 font-semibold">Aseprite</span>{" "}
              using a low-end laptop, a touchpad, and a lot of perseverance. I'm a{" "}
              <span className="text-orange-400 font-semibold">self-taught artist</span>. 
              If given the chance to use a high-end laptop, I would love to try{" "}
              <span className="text-orange-400 font-semibold">Unreal Engine</span>.
            </p>
          </div>
        </div>

        {/* Sample Logos Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Sample
              </span>{" "}
              Logos
            </h3>
          </div>
          
          <ImageGallery title="" items={LogoItems} />
          
          <div className="mt-8 bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <p className="text-center text-lg text-gray-300 leading-relaxed">
              Made with{" "}
              <span className="text-orange-400 font-semibold">Canva</span>. 
              I would love to try{" "}
              <span className="text-orange-400 font-semibold">Photoshop</span>{" "}
              if given the chance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;