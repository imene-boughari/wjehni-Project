import arrowLeftWhite from "../../assets/images/arrow-left-white.png";
import arrowLeftPurple from "../../assets/images/arrow-left-purple.png";
import arrowDownPurple from "../../assets/images/arrow-down-purple.png";
import "./HomeConfirmButton.css";

const ICONS = {
  leftWhite: arrowLeftWhite,
  leftPurple: arrowLeftPurple,
  down: arrowDownPurple,
};

/**
 * ConfirmButton — bouton reutilisable de la page d'accueil.
 *
 * variant : "primary" (fond violet plein) | "outline" (fond blanc, contour) | "onDark" (fond orange, sur bandeau violet)
 * icon    : "leftWhite" | "leftPurple" | "down" | "none"
 */
const HomeConfirmButton = ({
  label,
  onClick,
  variant = "primary",
  icon = "leftWhite",
  type = "button",
}) => {
  const iconSrc = ICONS[icon];

  return (
    <button
      type={type}
      className={`home-confirm-button home-confirm-button--${variant}`}
      onClick={onClick}
    >
      <span>{label}</span>
      {iconSrc && <img src={iconSrc} alt="" className="home-confirm-button__arrow" />}
    </button>
  );
};

export default HomeConfirmButton;