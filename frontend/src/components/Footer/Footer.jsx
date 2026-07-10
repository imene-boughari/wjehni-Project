import { CapIcon } from "../icons/Icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-note">
      <span className="footer-note__dash" />
      <span className="footer-note__text">
        <CapIcon />
        منصة وجهني للتوجيه لبكالوريا 2026
      </span>
    </div>
  );
}