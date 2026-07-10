import { useState, useRef, useEffect } from "react";
import "./BranchSelect.css";

/**
 * BranchSelect
 * Composant générique pour une matière "à choix" :
 * 1) Affiche un bouton (ex "هندسة" ou "اللغة الثالثة") avec une petite flèche.
 * 2) Au clic, propose les options passées en prop.
 * 3) Une fois une option choisie, affiche le champ de saisie de sa note /20,
 *    avec le nom de l'option comme libellé (+ possibilité de changer de choix).
 *
 * Utilisé pour :
 * - "genie"  (Math Technique) : procédés / civil / électrique / mécanique
 * - "lang3"  (Langues)        : espagnol / allemand
 */
export default function BranchSelect({
  triggerLabel,
  options,
  branch,
  note,
  onBranchChange,
  onNoteChange,
  error,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selected = options.find((o) => o.id === branch) || null;

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    onBranchChange(id);
    setOpen(false);
  };

  const handleNoteChange = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d{0,2}(\.\d{0,2})?$/.test(raw)) {
      onNoteChange(raw);
    }
  };

  return (
    <div className="branch-select" ref={wrapperRef}>
      <div className="branch-select__row">
        <div className="branch-select__trigger-wrap">
          <button
            type="button"
            className="branch-select__trigger"
            onClick={() => setOpen((o) => !o)}
          >
            {selected ? selected.label : triggerLabel}
            <span className={`branch-select__arrow ${open ? "branch-select__arrow--open" : ""}`}>
              ▾
            </span>
          </button>

          {open && (
            <ul className="branch-select__menu">
              {options.map((o) => (
                <li key={o.id}>
                  <button
                    type="button"
                    className={`branch-select__option ${o.id === branch ? "branch-select__option--active" : ""}`}
                    onClick={() => handleSelect(o.id)}
                  >
                    {o.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selected && (
          <div className={`branch-select__field ${error ? "branch-select__field--error" : ""}`}>
            <input
              type="text"
              inputMode="decimal"
              className="branch-select__number"
              value={note ?? ""}
              onChange={handleNoteChange}
              placeholder="0.00"
            />
            <span className="branch-select__unit">/20</span>
          </div>
        )}
      </div>

      {!selected && (
        <span className="branch-select__hint">اختر لمتابعة إدخال المعدل</span>
      )}
      {error && <span className="branch-select__error-text">{error}</span>}
    </div>
  );
}