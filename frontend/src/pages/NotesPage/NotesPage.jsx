import { useState, useMemo } from "react";
import bgPatternDesktop from "../../assets/images/bg-pattern.png";
import bgPatternMobile from "../../assets/images/Group_14.png";
import decoRectangle from "../../assets/images/Rectangle.png";
import Navbar from "../../components/Navbar/Navbar";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/Footer/Footer";
import { ChevronIcon, ChevronRightIcon } from "../../components/icons/Icons";
import NotesForm from "../../components/NotesForm/NotesForm";
import { FILIERES_SUBJECTS, BRANCH_SELECT_CONFIG, OPTIONAL_SUBJECTS } from "../../data/subjectsConfig";
import "../FiliereSelectionPage/FiliereSelectionPage.css"; // réutilise .page / .content / .card / .card__title / .card__subtitle
import "./NotesPage.css";

/**
 * Étape 3 du parcours d'orientation وجهني : saisie des notes des matières essentielles.
 *
 * Props :
 *  - subjectItem   : objet filière choisi à l'étape 1 (voir FILIERES dans FiliereGrid.jsx)
 *  - filiereKey    : id de la filière, ex "sciences", "tech-math", "langues"... (= subjectItem.id)
 *  - moyenneBac    : nombre saisi à l'étape 2
 *  - onBack()      : callback du bouton "رجوع"
 *  - onNext(notes) : callback du bouton "تأكيد ومتابعة", reçoit les notes saisies
 */
export default function NotesPage({ subjectItem, filiereKey, moyenneBac, onBack, onNext }) {
  const subjectIds = FILIERES_SUBJECTS[filiereKey] || [];

  // Matières simples : { math: "12.00", physique: "17.00", ... }
  const [notes, setNotes] = useState({});
  // Matières à choix (genie, lang3) : { genie: { branch, note }, lang3: { branch, note } }
  const [branchSelections, setBranchSelections] = useState({});
  const [errors, setErrors] = useState({});

  const handleNoteChange = (id, value) => {
    setNotes((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleBranchChange = (id, branchId) => {
    setBranchSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], branch: branchId },
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleBranchNoteChange = (id, value) => {
    setBranchSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], note: value },
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const isValidNote = (value) => {
    if (value === "" || value === undefined || value === null) return false;
    const n = Number(value);
    return !Number.isNaN(n) && n >= 0 && n <= 20;
  };

  const isSubjectComplete = (id) => {
    if (BRANCH_SELECT_CONFIG[id]) {
      const selection = branchSelections[id] || {};
      return Boolean(selection.branch) && isValidNote(selection.note);
    }
    if (OPTIONAL_SUBJECTS.includes(id)) {
      const value = notes[id];
      if (value === undefined || value === "") return true; // facultative : vide = ok
      return isValidNote(value); // remplie : doit être valide (0-20)
    }
    return isValidNote(notes[id]);
  };

  // Active/désactive le bouton "تأكيد ومتابعة", même logique que isValid sur MoyenneBacPage
  const isComplete = useMemo(
    () => subjectIds.every(isSubjectComplete),
    [subjectIds, notes, branchSelections]
  );

  const handleConfirm = () => {
    const nextErrors = {};

    subjectIds.forEach((id) => {
      if (BRANCH_SELECT_CONFIG[id]) {
        const selection = branchSelections[id] || {};
        if (!selection.branch) nextErrors[id] = "اختر خياراً أولاً";
        else if (!isValidNote(selection.note)) nextErrors[id] = "أدخل معدلاً صحيحاً بين 0 و20";
        return;
      }
      if (OPTIONAL_SUBJECTS.includes(id)) {
        const value = notes[id];
        if (value === undefined || value === "") return; // facultative : on laisse vide
        if (!isValidNote(value)) nextErrors[id] = "أدخل معدلاً صحيحاً بين 0 و20";
        return;
      }
      if (!isValidNote(notes[id])) {
        nextErrors[id] = "أدخل معدلاً صحيحاً بين 0 و20";
      }
    });

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = { ...notes };
    subjectIds.forEach((id) => {
      if (BRANCH_SELECT_CONFIG[id]) payload[id] = branchSelections[id];
    });

    onNext?.(payload);
  };

  return (
    <div className="page">
      <img src={bgPatternDesktop} alt="" className="page__bg page__bg--desktop" />
      <img src={bgPatternMobile} alt="" className="page__bg page__bg--mobile" />

      <img src={decoRectangle} alt="" className="page__deco-rectangle" />

      <Navbar />

      <main className="content">
        <Stepper activeStep={3} />

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
            <span>
              {subjectItem?.label}
              {moyenneBac != null && ` · معدل ${Number(moyenneBac).toFixed(2)}/20`}
            </span>
          </div>

          <h1 className="card__title">أدخل معدلات موادك الأساسية</h1>
          <p className="card__subtitle">
            هذه هي المواد الأساسية في شعبتك، وهي التي تُحسب في المعدل الموزون لاختيار التخصص.
          </p>

          <NotesForm
            filiereKey={filiereKey}
            notes={notes}
            onNoteChange={handleNoteChange}
            branchSelections={branchSelections}
            onBranchChange={handleBranchChange}
            onBranchNoteChange={handleBranchNoteChange}
            errors={errors}
          />

          <div className="notes-actions">
            <button type="button" className="notes-btn notes-btn--ghost" onClick={onBack}>
              <ChevronRightIcon />
              رجوع
            </button>
            <button
              type="button"
              className="notes-btn notes-btn--primary"
              disabled={!isComplete}
              onClick={handleConfirm}
            >
              تأكيد ومتابعة
              <ChevronIcon />
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}