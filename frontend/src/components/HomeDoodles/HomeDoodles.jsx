import orangeArrow from "../../assets/images/home-doodle-arrow-orange.svg";
import greenArrow from "../../assets/images/home-doodle-arrow-green.svg";
import purpleArrow from "../../assets/images/home-doodle-arrow-purple.svg";
import "./HomeDoodles.css";

const DOODLE_SRC = {
  orange: orangeArrow,
  green: greenArrow,
  purple: purpleArrow,
};

/**
 * Doodle — une seule flèche décorative, positionnée en absolu par le parent.
 * Utilisation : <Doodle color="green" className="hero__home-doodle--bottom-right" />
 */
export const HomeDoodle = ({ color = "orange", className = "" }) => (
  <img
    src={DOODLE_SRC[color]}
    alt=""
    aria-hidden="true"
    className={`home-doodle home-doodle--${color} ${className}`}
  />
);

export default HomeDoodle;