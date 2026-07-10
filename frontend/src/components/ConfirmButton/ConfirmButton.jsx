import { ChevronIcon } from "../icons/Icons";
import "./ConfirmButton.css";

export default function ConfirmButton({ disabled, onClick, children }) {
  return (
    <button type="button" className="confirm-btn" disabled={disabled} onClick={onClick}>
      <ChevronIcon />
      {children || "تأكيد الشعبة والمتابعة"}
    </button>
  );
}