import logo from "../../assets/images/logo.png";
import arrowRed from "../../assets/images/Subtract-rouge.png";
import arrowWhite from "../../assets/images/Subtract-blanc.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="وجهني" className="navbar__logo-img" />
      </div>

      <div className="navbar__headline">
        عليك الباك
        <img src={arrowWhite} alt="" className="navbar__arrow-white" />
        وعلينا لافاك
        <img src={arrowRed} alt="" className="navbar__arrow-red" />
      </div>
    </header>
  );
}