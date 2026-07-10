import SubjectInput from "../SubjectInput/SubjectInput";
import BranchSelect from "../BranchSelect/BranchSelect";
import {
  SUBJECT_LABELS,
  SUBJECT_HINTS,
  FILIERES_SUBJECTS,
  BRANCH_SELECT_CONFIG,
} from "../../data/subjectsConfig";
import "./NotesForm.css";

/**
 * NotesForm
 * Rendu "champs uniquement" des matières essentielles d'une filière.
 * Composant contrôlé : tout l'état (valeurs, erreurs) vit dans la page
 * qui l'utilise (voir pages/NotesPage/NotesPage.jsx).
 *
 * Deux types de matières :
 * - "simples"  (math, physique, science, francais, anglais) -> SubjectInput
 * - "à choix"  (genie, lang3, voir BRANCH_SELECT_CONFIG)     -> BranchSelect
 *
 * Props :
 * - filiereKey        : id de la filière (ex "sciences", "tech-math", "langues"...)
 * - notes             : { [subjectId]: string }                  (matières simples)
 * - onNoteChange      : (subjectId, value) => void
 * - branchSelections  : { [subjectId]: { branch, note } }         (matières à choix)
 * - onBranchChange    : (subjectId, branchId) => void
 * - onBranchNoteChange: (subjectId, value) => void
 * - errors            : { [subjectId]: string }
 */
export default function NotesForm({
  filiereKey,
  notes,
  onNoteChange,
  branchSelections = {},
  onBranchChange,
  onBranchNoteChange,
  errors = {},
}) {
  const subjectIds = FILIERES_SUBJECTS[filiereKey] || [];

  return (
    <div className="notes-form__list">
      {subjectIds.map((id) => {
        const branchConfig = BRANCH_SELECT_CONFIG[id];

        if (branchConfig) {
          const selection = branchSelections[id] || {};
          return (
            <BranchSelect
              key={id}
              triggerLabel={branchConfig.triggerLabel}
              options={branchConfig.options}
              branch={selection.branch}
              note={selection.note}
              onBranchChange={(branchId) => onBranchChange(id, branchId)}
              onNoteChange={(value) => onBranchNoteChange(id, value)}
              error={errors[id]}
            />
          );
        }

        return (
          <SubjectInput
            key={id}
            label={SUBJECT_LABELS[id]}
            value={notes[id]}
            onChange={(value) => onNoteChange(id, value)}
            error={errors[id]}
            hint={SUBJECT_HINTS[id]}
          />
        );
      })}
    </div>
  );
}