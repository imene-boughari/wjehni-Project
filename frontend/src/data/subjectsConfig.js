import { WILAYAS } from "../constants/wilayas";
import { DOMAINS } from "../constants/domains";
/**
 * subjectsConfig.js
 * Configuration centralisée des matières essentielles par filière.
 *
 * Les clés utilisées ici sont EXACTEMENT les `id` définis dans
 * src/components/FiliereGrid/FiliereGrid.jsx (export const FILIERES).
 * -> Un seul endroit à modifier si les matières changent, aucun autre
 *    mapping à maintenir ailleurs.
 */

// Libellés affichés (arabe) pour les matières "simples" (SubjectInput)
export const SUBJECT_LABELS = {
  math: "الرياضيات",
  physique: "الفيزياء",
  science: "العلوم الطبيعية",
  francais: "اللغة الفرنسية",
  anglais: "اللغة الإنجليزية",
  arabe: "اللغة العربية",
  amazighe: "الأمازيغية",
};

// Matières facultatives : pas obligatoires pour activer "تأكيد ومتابعة",
// mais si une note est saisie elle doit rester valide (entre 0 et 20).
export const OPTIONAL_SUBJECTS = ["amazighe"];

// Texte d'aide affiché sous certaines matières (ex: facultatives)
export const SUBJECT_HINTS = {
  amazighe: "املأ هذا المربع إذا كانت الأمازيغية تعنيك",
};

// Branches proposées pour la matière "genie" (Math Technique)
export const GENIE_BRANCHES = [
  { id: "procedes", label: "هندسة الطرائق" },
  { id: "civil", label: "الهندسة المدنية" },
  { id: "electrique", label: "الهندسة الكهربائية" },
  { id: "mecanique", label: "الهندسة الميكانيكية" },
];

// Langues proposées pour la matière "lang3" (filière Langues)
export const LANG3_OPTIONS = [
  { id: "espagnol", label: "الإسبانية" },
  { id: "allemand", label: "الألمانية" },
];

/**
 * Config des matières "à choix" : au lieu d'un simple champ de note,
 * elles affichent d'abord un bouton (triggerLabel) + une petite flèche,
 * proposent une liste d'options au clic, puis affichent le champ de note
 * une fois l'option choisie. Rendu par le composant BranchSelect.
 */
export const BRANCH_SELECT_CONFIG = {
  genie: { triggerLabel: "هندسة", options: GENIE_BRANCHES },
  lang3: { triggerLabel: "اللغة الثالثة", options: LANG3_OPTIONS },
};

/**
 * Matières essentielles à saisir, par filière (clé = FILIERES[i].id).
 *   math       -> رياضيات
 *   sciences   -> علوم تجريبية
 *   tech-math  -> تقني رياضي   (+ "genie" -> BranchSelect : procédés/civil/électrique/mécanique)
 *   gestion    -> تسيير واقتصاد
 *   lettres    -> آداب وفلسفة
 *   arts       -> فنون
 *   langues    -> لغات أجنبية  (+ "arabe", "lang3" -> BranchSelect : إسبانية/ألمانية,
 *                 + "amazighe" facultative)
 */
export const FILIERES_SUBJECTS = {
  math: ["math", "physique", "science", "francais", "anglais"],
  sciences: ["math", "physique", "science", "francais", "anglais"],
  "tech-math": ["math", "physique", "francais", "anglais", "genie"],

  gestion: ["francais", "anglais"],
  lettres: ["francais", "anglais"],
  arts: ["francais", "anglais"],

  langues: ["francais", "anglais", "arabe", "lang3", "amazighe"],
};

// ---------------------------------------------------------------------------
// Mapping vers l'API du backend (voir SpecialitesPage.jsx)
// ---------------------------------------------------------------------------

// Correspondance entre l'id de filière (frontend) et le libellé attendu par l'API
const FILIERE_BAC_LABELS = {
  math: "رياضيات",
  "tech-math": "تقني رياضي",
  sciences: "علوم تجريبية",
  langues: "لغات أجنبية",
  lettres: "آداب وفلسفة",
  gestion: "تسيير واقتصاد",
  arts: "فنون",
};

// Libellés sans "ال" devant, comme attendu par l'API
const GENIE_SPE_LABELS = {
  procedes: "هندسة الطرائق",
  civil: "هندسة مدنية",
  electrique: "إلكتروتقني",
  mecanique: "هندسة ميكانيكية",
};

const LANG3_SPE_LABELS = {
  espagnol: "إسبانية",
  allemand: "ألمانية",
};

// Construit l'objet de filtres à envoyer à l'API à partir des réponses utilisateur
export function buildApiFilters(filiereKey, moyenneBac, notes) {
  if (!filiereKey || !notes) return null;

  const filiere_bac = FILIERE_BAC_LABELS[filiereKey];
  if (!filiere_bac) return null;

  const base = {
    filiere_bac,
    moyenne: moyenneBac != null ? String(moyenneBac) : "",
  };

  switch (filiereKey) {
    case "sciences":
    case "math":
      return {
        ...base,
        note_science: notes.science ?? "",
        note_math: notes.math ?? "",
        note_physique: notes.physique ?? "",
        note_fr: notes.francais ?? "",
        note_ang: notes.anglais ?? "",
      };

    case "tech-math": {
      const genie = notes.genie || {};
      return {
        ...base,
        note_math: notes.math ?? "",
        note_physique: notes.physique ?? "",
        note_tech: genie.note ?? "",
        spe: GENIE_SPE_LABELS[genie.branch] ?? "",
      };
    }

    case "gestion":
    case "lettres":
    case "arts":
      return {
        ...base,
        note_fr: notes.francais ?? "",
        note_ang: notes.anglais ?? "",
      };

    case "langues": {
      const lang3 = notes.lang3 || {};
      const filters = {
        ...base,
        note_fr: notes.francais ?? "",
        note_ang: notes.anglais ?? "",
        note_ar: notes.arabe ?? "",
        note_L3: lang3.note ?? "",
        spe: LANG3_SPE_LABELS[lang3.branch] ?? "",
      };
      if (notes.amazighe) filters.note_amazigh = notes.amazighe;
      return filters;
    }

    default:
      return null;
  }
}

// Table de correspondance nom de wilaya (arabe) -> code officiel ("01", "02"...)
const WILAYA_NAME_TO_CODE = WILAYAS.reduce((acc, w) => {
  acc[w.name] = w.code;
  return acc;
}, {});

// Table de correspondance libellé de domaine (arabe) -> code ("SHS", "SNV"...)
const DOMAIN_LABEL_TO_CODE = Object.entries(DOMAINS).reduce((acc, [code, label]) => {
  acc[label] = code;
  return acc;
}, {});

// Transforme un résultat de l'API au format attendu par SpecialiteGrid / SpecialiteCard
export function mapSpecialityToFiliere(item) {
  return {
    id: item.id,
    title: item.filiere,
    institutionName: item.etablissement,
    domainLabel: item.domaine,
    domainCode: DOMAIN_LABEL_TO_CODE[item.domaine] ?? item.domaine,
    wilayaName: item.wilaya,
    wilayaCode: WILAYA_NAME_TO_CODE[item.wilaya] ?? item.wilaya,
    minScore: item.min,
  };
}