import { useState, useMemo } from "react";
import bgPatternDesktop from "../../assets/images/bg-pattern.png";
import bgPatternMobile from "../../assets/images/Group_14.png";
import decoYellow from "../../assets/images/Subtract-jaune.png";
import decoBlue from "../../assets/images/Subtract-bleu.png";
import arrowRed from "../../assets/images/Subtract-rouge.png";
import arrowWhite from "../../assets/images/Subtract-blanc.png";
import Navbar from "../../components/Navbar/Navbar";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/Footer/Footer";
import { ChevronIcon, ChevronRightIcon } from "../../components/icons/Icons";
import "../FiliereSelectionPage/FiliereSelectionPage.css"; // réutilise .page / .content / .card / .card__title / .card__subtitle
import "./MoyenneBacPage.css";

/**
 * Étape 2 du parcours d'orientation وجهني : saisie de la moyenne du Bac.
 *
 * Props :
 *  - subject       : libellé de la filière choisie à l'étape précédente (affiché dans le badge)
 *  - onBack()      : callback du bouton "رجوع"
 *  - onNext(value) : callback du bouton "التالي", reçoit la moyenne saisie (nombre)
 */
export default function MoyenneBacPage({ subjectItem, onBack, onNext }) {
  const [raw, setRaw] = useState("");

  const numericValue = useMemo(() => {
    const n = parseFloat(raw.replace(",", "."));
    return Number.isFinite(n) ? n : null;
  }, [raw]);

  const isValid = numericValue !== null && numericValue > 0 && numericValue <= 20;

  const handleChange = (e) => {
    const v = e.target.value;
    // n'autorise que chiffres + un séparateur décimal
    if (/^\d{0,2}([.,]\d{0,2})?$/.test(v)) setRaw(v);
  };

  return (
    <div className="page mb-page">
      <img src={bgPatternDesktop} alt="" className="page__bg page__bg--desktop" />
      <img src={bgPatternMobile} alt="" className="page__bg page__bg--mobile" />

      <img src={decoYellow} alt="" className="page__deco-yellow" />
      <img src={decoBlue} alt="" className="page__deco-blue" />
      <img src={arrowRed} alt="" className="page__side-arrow page__side-arrow--red" />
      <img src={arrowWhite} alt="" className="page__side-arrow page__side-arrow--white" />

      <Navbar />

      <main className="content">
        <Stepper activeStep={2} />

        <section className="card">
          <div className="subject-badge">
            {subjectItem && (
              <span
                className="subject-badge__icon"
                style={{ background: `var(${subjectItem.colorVar})` }}
              >
                <subjectItem.Icon />
              </span>
            )}
            <span>{subjectItem?.label}</span>
          </div>

          <h1 className="card__title">أدخل معدلك في البكالوريا</h1>
          <p className="card__subtitle">
            اكتب معدلك العام كما سيظهر في كشف نقاط البكالوريا (من 0 إلى 20).
          </p>

          <div className="moyenne-input-wrap">
            <span className="moyenne-input-suffix">/20</span>
            <input
              className="moyenne-input"
              type="text"
              inputMode="decimal"
              placeholder="00.00"
              value={raw}
              onChange={handleChange}
              aria-label="معدل البكالوريا"
            />
          </div>

          <div className="moyenne-actions">
            <button type="button" className="moyenne-btn moyenne-btn--ghost" onClick={onBack}>
              <ChevronRightIcon />
              رجوع
            </button>
            <button
              type="button"
              className="moyenne-btn moyenne-btn--primary"
              disabled={!isValid}
              onClick={() => isValid && onNext?.(numericValue)}
            >
              التالي: المواد الأساسية
              <ChevronIcon />
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}