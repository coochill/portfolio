import { useEffect, useState } from "react";
import ParallaxSection from "../components/ParallaxSection";
import AboutSection from "./AboutSection";
import SkillsSection from "../pages/SkillsSection"; 
import aurora from "../assets/stars-forward.mp4";
import BatStateULogo from "../assets/BatStateU.png"; 
import LetranLogo from "../assets/Letran.png"; 
import { ExternalLink, Github, Star, Code, Users, Calendar } from "lucide-react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealStart = window.innerHeight * 0.5;
  const revealEnd = window.innerHeight * 1.1;
  const progress = Math.min(Math.max((scrollY - revealStart) / (revealEnd - revealStart), 0), 1);

  const parallaxOpacity = 1 - progress;
  const aboutOpacity = progress;
  const aboutTranslateY = 20 * (1 - progress);

  const normalSectionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  };

  // Projects data
  const projects = [
    {
      title: "BatstateU Quiz Quest",
      description: "An interactive quiz application designed specifically for Batangas State University students. Features comprehensive question banks, real-time scoring, and progress tracking.",
      githubUrl: "https://github.com/coochill/Quiz-Quest",
      technologies: ["Windows Forms", ".Net Framework", "MySQL"],
      category: "Web Application",
      featured: false,
      icon: <Star className="w-5 h-5" />,
      gradient: "from-blue-400 to-red-500"
    },
    {
      title: "ALUtron",
      description: "ALUtron is a web-based simulation tool designed and developed to provide an interactive digital platform that simulates the core functionalities of an Arithmetic Logic Unit (ALU).",
      githubUrl: "https://github.com/coochill/ALUtron",
      technologies: ["Tailwind", "React", "Flask"],
      category: "Educational Tool",
      featured: true,
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "coDoc",
      description: "Codoc is a developer-focused tool that analyzes source code to evaluate complexity, maintainability, and structure. It identifies areas of the code that are overly complex or deeply nested and provides an AI-powered summary with actionable suggestions.",
      githubUrl: "https://github.com/coochill/coDoc",
      technologies: ["React", "Node.js", "Flask"],
      category: "Code Complexity Analyzer Tool",
      featured: true,
      icon: <Users className="w-5 h-5" />,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "GeoMinder",
      description: "A location-based task reminder app that helps you stay productive by sending reminders based on your location! Whether it's a grocery list at the store or a meeting reminder at the office, GeoMinder ensures you never miss a task.",
      githubUrl: "https://github.com/coochill/GeoMinder",
      technologies: ["Android Studio", "Google Maps API", "Firebase"],
      category: "Mobile App",
      featured: true,
      icon: <Calendar className="w-5 h-5" />,
      gradient: "from-orange-400 to-yellow-500"
    },
    {
      title: "DeTechs",
      description: "DeTechs is a school-based project for the College of Informatics and Computing Sciences at Batangas State University, Alangilan. It features a device equipped with sensors for detecting fire and earthquakes. The system is complemented by a Windows application designed for CICS technicians to manage weather forecasts, earthquake alerts, and fire notifications.",
      githubUrl: "https://github.com/coochill/DeTechs",
      technologies: ["C# and C++", "Arduino Uno", "MySQL"],
      category: "Disaster Detection Tool",
      featured: false,
      icon: <Code className="w-5 h-5" />,
      gradient: "from-yellow-400 to-purple-500"
    },
    {
      title: "Recurs-IVE It!",
      description: "Recurs-IVE It! is a web-based Recursive Algorithm Simulator that helps users understand and visualize recursion through interactive real-time animations. It supports various algorithms, including Fibonacci, Factorial, Merge Sort, Quick Sort (both random and non-random), and Catalan Numbers. With features like play/pause controls and secure data handling through input validation and encryption, the platform offers an engaging and hands-on experience for students and developers to grasp recursion concepts more clearly.",
      githubUrl: "https://github.com/coochill/Recurs-IVE-It",
      technologies: ["Firebase", "Three.js", "React", "Flask"],
      category: "Algorithm Simulator",
      featured: true,
      icon: <Code className="w-5 h-5" />,
      gradient: "from-red-400 to-rose-500"
    },
    {
      title: "Go-Cery",
      description: "Go-Cery is a cutting-edge Android application that enhances the efficiency of traditional grocery shopping by leveraging modern technology. With Go-Cery, customers enjoy a faster, more streamlined experience, while store owners efficiently manage their inventory and operations.",
      githubUrl: "https://github.com/MannLester/Go-Cery",
      technologies: ["Firebase", "Glide", "Android Studio"],
      category: "QR Code Generator and Scanning Tool",
      featured: false,
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-400 to-orange-500"
    }

  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "white" }}>
      {/* Parallax Video Section */}
      <div
        style={{
          opacity: parallaxOpacity,
          transition: "opacity 0.5s ease-out",
          pointerEvents: parallaxOpacity === 0 ? "none" : "auto",
        }}
      >
        <ParallaxSection background={aurora}>
          <h1
            className="text-white font-bold drop-shadow-lg text-center transition-all duration-300"
            style={{
              fontSize: "80px",
              opacity: parallaxOpacity,
              transform: `scale(${1 - 0.1 * progress})`,
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            Welcome to My Portfolio
          </h1>
        </ParallaxSection>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md"
        style={{
          opacity: aboutOpacity,
          transform: `translateY(${aboutTranslateY}px)`,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          backgroundColor: `rgba(0, 0, 0, ${0.3 + 0.7 * aboutOpacity})`,
        }}
      >
         <AboutSection />
      </section>
      
      {/* Enhanced Education Section */}
      <section
        id="education"
        className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md flex items-center justify-center"
        style={normalSectionStyle}
      >
        <div className="max-w-6xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My academic journey through excellence and continuous learning
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {/* Batangas State University */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo Section */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl transform rotate-3 scale-110"></div>
                  <div className="relative bg-white rounded-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={BatStateULogo}
                      alt="Batangas State University Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                      Batangas State University
                    </h3>
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                      Current
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">
                    Bachelor of Science in Computer Science
                  </h4>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Currently pursuing a Bachelor of Science in Computer Science. 
                    Recognized as a Dean's Lister during the following terms: 1st Year – 2nd Semester 
                    and Mid-Year Term, and 2nd Year – 1st and 2nd Semesters.
                  </p>

                  {/* Achievement Tags */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-gray-800 border border-orange-400 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                      Dean's Lister
                    </span>
                    <span className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      Computer Science
                    </span>
                    <span className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      Academic Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colegio de San Juan de Letran */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo Section */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-3 scale-110"></div>
                  <div className="relative bg-white rounded-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={LetranLogo}
                      alt="Letran Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                      Colegio de San Juan de Letran - Calamba
                    </h3>
                    <div className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full font-semibold text-sm">
                      Completed
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    Science, Technology, Engineering, Mathematics (STEM)
                  </h4>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    I was a Science, Technology, Engineering, Mathematics (STEM) student. 
                    Consistently achieved academic honors—graduated Grade 11 with Honors 
                    and Grade 12 with High Honors.
                  </p>

                  {/* Achievement Tags */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-gray-800 border border-blue-400 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      High Honors
                    </span>
                    <span className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      STEM Graduate
                    </span>
                    <span className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      Academic Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">4</h3>
              <p className="text-gray-400 font-medium">Dean's List Terms</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">High Honors</h3>
              <p className="text-gray-400 font-medium">Senior High Achievement</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-green-400 mb-2">STEM</h3>
              <p className="text-gray-400 font-medium">Technical Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md"
        style={normalSectionStyle}
      >
          <SkillsSection />
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md flex items-center justify-center"
        style={normalSectionStyle}
      >
        <div className="max-w-6xl w-full mx-auto">
          {/* Modern Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Featured
              </span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projects
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A collection of innovative solutions and creative applications
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300 group"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-xl text-black transform group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-400 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <div className={`bg-gradient-to-r ${project.gradient} text-black px-3 py-1 rounded-full text-sm font-semibold`}>
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <div
                  key={project.title}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 group"
                >
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${project.gradient} p-2 rounded-lg text-black`}>
                      {project.icon}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Project Content */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Category Tag */}
                  <div className={`bg-gradient-to-r ${project.gradient} text-black px-2 py-1 rounded-full text-xs font-semibold inline-block`}>
                    {project.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">5+</h3>
              <p className="text-gray-400 font-medium">Projects Completed</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">Multiple</h3>
              <p className="text-gray-400 font-medium">Tech Stacks</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-green-400 mb-2">Open Source</h3>
              <p className="text-gray-400 font-medium">Available on GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[100vh]" />
    </div>
  );
};

export default Home;
