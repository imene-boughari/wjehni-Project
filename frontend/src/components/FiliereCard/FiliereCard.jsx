import { CheckIcon } from "../icons/Icons";
import "./FiliereCard.css";

// item : { id, label, colorVar, Icon, order, mobileOrder }
export default function FiliereCard({ item, selected, onSelect }) {
  const isSelected = selected === item.id;

  return (
    <button
      type="button"
      className={`filiere-card ${isSelected ? "filiere-card--selected" : ""}`}
      style={{ "--order-desktop": item.order, "--order-mobile": item.mobileOrder }}
      onClick={() => onSelect(item.id)}
      aria-pressed={isSelected}
    >
      {isSelected && (
        <span className="filiere-card__badge">
          <CheckIcon />
        </span>
      )}
      <span className="filiere-card__icon" style={{ background: `var(${item.colorVar})` }}>
        <item.Icon />
      </span>
      <span className="filiere-card__label">{item.label}</span>
    </button>
  );
}