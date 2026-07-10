import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import arrowRed from "../../assets/images/Subtract-rouge.png";
import "./HomeNavbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HomeNavbar = ({ onStart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (action) => {
    setIsMenuOpen(false);
    if (action) action();
  };

  return (
    <header className="home-navbar">
      <div className="container home-navbar__row">
        {/* Logo, cote droit */}
        <div className="home-navbar__logo">
          <img src={logo} alt="وجهني" />
        </div>

        {/* Les 4 liens, au centre (deviennent un menu deroulant en mobile) */}
        <ul className={`home-navbar__links ${isMenuOpen ? "home-navbar__links--open" : ""}`}>
          <li>
            <button onClick={() => handleLinkClick(() => scrollToSection("majalat"))}>المجالات</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick(() => scrollToSection("a-propos"))}>من نحن</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick(onStart)}>ابدأ الآن</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick(() => scrollToSection("comment-ca-marche"))}>كيف يعمل</button>
          </li>
        </ul>

        {/* Slogan, cote gauche + bouton burger (mobile uniquement) */}
        <div className="home-navbar__slogan">
          <img src={arrowRed} alt="" aria-hidden="true" className="home-navbar__slogan-arrow" />
          <span>عليك الباك وعلينا لافاك</span>
          <button
            type="button"
            className="home-navbar__burger"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;