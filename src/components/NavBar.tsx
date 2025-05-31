import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg"; // Replace with your actual logo path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["About", "Education", "Skills", "Projects"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between">
      {/* Logo as image */}
      <div className="h-10 w-auto">
        <img src={logo} alt="Logo" className="h-full object-contain" />
      </div>

      {/* Menu Icon */}
      <button onClick={toggleMenu} className="text-white">
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center gap-10 text-white text-3xl font-semibold transition-all duration-300">
          
            <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-yellow-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2"
          >
            <X size={28} />
          </button>
            
            {links.map((link) => (<a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-orange-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
