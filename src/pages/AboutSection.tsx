import profilePhoto from "../assets/profile-photo.jpg"; 
import { Calendar, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative z-20 w-full min-h-screen p-10 backdrop-blur-md flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
      }}
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Modern Card Layout */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image Section */}
            <div className="relative">
              <div className="relative">
                {/* Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl transform rotate-6 scale-105"></div>
                
                {/* Profile Image Container */}
                <div className="relative bg-gray-800 rounded-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Replace this div with your actual image */}
                  <img 
                    src={profilePhoto} 
                    alt="Joy Susette Valdez Domingo" 
                    className="w-full h-80 object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Name with Gradient */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                    Joy Susette V.
                  </span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Domingo
                </h2>
              </div>

              {/* Bio Text */}
              <div className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Hello! I'm a passionate Computer Science student at 
                  <span className="text-orange-400 font-semibold"> Batangas State University</span>, 
                  dedicated to creating innovative digital experiences.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  I specialize in UI/UX design, backend development, and creative projects. 
                  My journey combines technical expertise with creative vision to build 
                  meaningful solutions.
                </p>
              </div>

              {/* Accent Features */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
                  UI/UX Designer
                </div>
                <div className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-full font-semibold">
                  Backend Developer
                </div>
                <div className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-full font-semibold">
                  Graphic Designer/Artist
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Get In Touch</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/coochill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/joy-susette-domingo-937759342/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  
                  <a
                    href="https://www.instagram.com/hakdog_watur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                   <div className="grid md:grid-cols-2 gap-8 mb-16">
         
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Dean's Lister</h3>
            <p className="text-gray-400">Academic Excellence Recognition</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">5+ Projects</h3>
            <p className="text-gray-400">Innovative Solutions Built</p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">CS Student</h3>
            <p className="text-gray-400">Batangas State University</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            </div> 
           {/* Personal Gmail */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                {/* Google-themed icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-2xl transform rotate-3 scale-110 opacity-20"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 p-4 rounded-2xl transform group-hover:rotate-0 transition-transform duration-500">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  Personal Email
                </h3>
                
                <a 
                  href="mailto:joysusette@gmail.com"
                  className="text-lg font-medium bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent hover:from-red-500 hover:to-white transition-all duration-300 mb-4"
                >
                  joysusette@gmail.com
                </a>

                <p className="text-gray-400 leading-relaxed mb-6">
                  For general inquiries, collaboration opportunities, and personal projects
                </p>

                {/* Gmail-styled button */}
                {/* <a
                  href="mailto:joysusette@gmail.com"
                  className="bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 hover:from-red-500 hover:to-white text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Email
                </a> */}
              </div>
            </div>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
            </div> 

            {/* University Email */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 transform hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                {/* University-themed icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-white rounded-2xl transform rotate-3 scale-110 opacity-20"></div>
                  <div className="relative bg-gradient-to-r from-red-500 to-white p-4 rounded-2xl transform group-hover:rotate-0 transition-transform duration-500">
                    <Mail className="w-8 h-8 text-black" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  University Email
                </h3>
                
                <a 
                  href="mailto:22-01827@g.batstate-u.edu.ph"
                  className="text-lg font-medium bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-300 mb-4"
                >
                  22-01827@g.batstate-u.edu.ph
                </a>

                <p className="text-gray-400 leading-relaxed mb-6">
                  For academic matters, university-related projects, and formal communications
                </p>

                {/* University-styled button */}
                {/* <a
                  href="mailto:22-01827@g.batstate-u.edu.ph"
                  className="bg-gradient-to-r from-red-500 to-white hover:from-white hover:to-red-500 text-black hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Email
                </a> */}
              </div>
            </div>
          </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            </div> 
          {/* Contact Info Grid */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Quick Contact
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Location */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Location</h4>
                <p className="text-gray-400">Cabuyao, Laguna, Philippines</p>
              </div>

              {/* Response Time */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Response Time</h4>
                <p className="text-gray-400">Usually within 24 hours</p>
              </div>

              {/* Availability */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Availability</h4>
                <p className="text-gray-400">Open to opportunities</p>
              </div>
            </div>
          </div>
          </div>
      
    </section>
  );
};

export default AboutSection;