import { CheckIcon, ClockIcon } from "../icons/Icons";
import "./Stepper.css";

const steps = [
  { n: 1, label: "الشعبة" },
  { n: 2, label: "معدل البكالوريا" },
  { n: 3, label: "المواد الأساسية" },
];

// activeStep : numéro de l'étape en cours (1, 2 ou 3)
// Les étapes avant activeStep passent automatiquement en état "terminé" (coche verte).
export default function Stepper({ activeStep = 1 }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => {
        const status = s.n < activeStep ? "done" : s.n === activeStep ? "active" : "future";
        return (
          <div className="stepper__item" key={s.n}>
            <div className={`step step--${status}`}>
              <span className="step__circle">
                {status === "done" ? <CheckIcon /> : status === "future" ? <ClockIcon /> : s.n}
              </span>
              <span className="step__label">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <span className={`step__connector ${status === "done" ? "step__connector--done" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}