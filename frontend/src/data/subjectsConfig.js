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
  "tech-math": ["math", "physique", "science", "francais", "anglais", "genie"],

  gestion: ["francais", "anglais"],
  lettres: ["francais", "anglais"],
  arts: ["francais", "anglais"],

  langues: ["francais", "anglais", "arabe", "lang3", "amazighe"],
};