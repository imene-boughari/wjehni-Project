import { MapPin } from "lucide-react";
import logo from "../../assets/images/logo.png";
import subtractWhite from "../../assets/images/Subtract-blanc.png";
import "./HomeFooter.css";

const INSTAGRAM_URL = "https://www.instagram.com/wejehni_bac?igsh=cjIyYnM5OTBicjgx";

/* Icone Instagram en SVG local : lucide-react a retire les icones de marques
   (Instagram, Facebook, etc.) de ses versions recentes, donc on ne l'importe plus. */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);

const HomeFooter = () => {
  return (
    <footer id="a-propos" className="home-footer">
      <img
        src={subtractWhite}
        alt=""
        aria-hidden="true"
        className="home-footer__doodle"
      />
      <div className="container home-footer__inner">
        <img src={logo} alt="وجهني" className="home-footer__logo" />

        <a
          className="home-footer__insta"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
          wejehni_bac
        </a>

        <span className="home-footer__location">
          <MapPin size={16} />
          الجزائر
        </span>

        <p className="home-footer__copyright">
          © 2026 وجّهني – كل الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;