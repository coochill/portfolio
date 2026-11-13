
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo-light.svg";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Projects", "Skills", "Bonus"];

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a
        href="#top"
        className="brand-mark"
        aria-label="Return to top"
        onClick={() => setIsOpen(false)}
      >
        <img src={logo} alt="" className="brand-mark__logo" />      

</a>

      <div className="desktop-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}

        <a className="nav-contact" href="#contact">
          Let's talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <div
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        {links.map((link, index) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            style={{ "--link-index": index } as React.CSSProperties}
            tabIndex={isOpen ? 0 : -1}
          >
            <span>0{index + 1}</span>
            {link}
            <ArrowUpRight size={17} />
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-menu__contact"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
        >
          Let's talk <ArrowUpRight size={18} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
