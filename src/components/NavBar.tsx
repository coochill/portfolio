import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo-dark.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["About", "Projects", "Skills", "Bonus"];

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a href="#top" className="brand-mark" aria-label="Return to top">
        <img src={logo} alt="" className="brand-mark__logo" />
        <span>Joy Susette Domingo</span>
      </a>

      <div className="desktop-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
        <a className="nav-contact" href="mailto:joysusette@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>

      <button
        onClick={toggleMenu}
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && <div className="mobile-menu" id="mobile-menu">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
            {link}
          </a>
        ))}
        <a href="mailto:joysusette@gmail.com" onClick={() => setIsOpen(false)}>
          Let&apos;s talk <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>}
    </nav>
  );
};

export default NavBar;
