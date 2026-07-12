import "./SubjectInput.css";

/**
 * SubjectInput
 * Une ligne "matière + champ de note /20", réutilisée pour
 * toutes les matières simples (math, physique, science, francais, anglais, lang3...).
 */
// Convertit les chiffres arabes-indiens (٠-٩) et perso-arabes (۰-۹)
// vers des chiffres latins (0-9), et la virgule arabe/decimale vers un point.
function toLatinDigits(str) {
  const arabicIndic = "٠١٢٣٤٥٦٧٨٩";
  const extendedArabicIndic = "۰۱۲۳۴۵۶۷۸۹";

  return str
    .replace(/[٠-٩]/g, (d) => arabicIndic.indexOf(d))
    .replace(/[۰-۹]/g, (d) => extendedArabicIndic.indexOf(d))
    .replace(/[،٫,]/g, "."); // virgule arabe/latine -> point décimal
}

export default function SubjectInput({ label, value, onChange, error, hint }) {
  const handleChange = (e) => {
    const raw = toLatinDigits(e.target.value);

    // On laisse taper librement, mais on filtre les caractères non numériques
    if (raw === "" || /^\d{0,2}(\.\d{0,2})?$/.test(raw)) {
      onChange(raw);
    }
  };

  return (
    <div className="subject-input">
      <div className="subject-input__label-col">
        <label className="subject-input__label">{label}</label>
        {hint && <span className="subject-input__hint">({hint})</span>}
      </div>

      <div className={`subject-input__field ${error ? "subject-input__field--error" : ""}`}>
        <input
          type="text"
          inputMode="decimal"
          lang="en"
          dir="ltr"
          className="subject-input__number"
          value={value ?? ""}
          onChange={handleChange}
          placeholder="0.00"
        />
        <span className="subject-input__unit">/20</span>
      </div>

      {error && <span className="subject-input__error-text">{error}</span>}
    </div>
  );
}