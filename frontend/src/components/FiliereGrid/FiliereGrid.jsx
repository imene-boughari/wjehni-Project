import FiliereCard from "../FiliereCard/FiliereCard";
import {
  CalculatorIcon,
  AtomIcon,
  LeafIcon,
  TranslateIcon,
  BookIcon,
  TrendIcon,
  ArtIcon,
} from "../icons/Icons";
import "./FiliereGrid.css";

// order       : position dans la grille en version DESKTOP (3 colonnes)
// mobileOrder : position dans la grille en version MOBILE (2 colonnes)
export const FILIERES = [
  { id: "math", label: "رياضيات", colorVar: "--c-primary-dark", Icon: CalculatorIcon, order: 1, mobileOrder: 3 },
  { id: "tech-math", label: "تقني رياضي", colorVar: "--c-blue", Icon: AtomIcon, order: 2, mobileOrder: 2 },
  { id: "sciences", label: "علوم تجريبية", colorVar: "--c-green", Icon: LeafIcon, order: 3, mobileOrder: 1 },
  { id: "langues", label: "لغات أجنبية", colorVar: "--c-violet", Icon: TranslateIcon, order: 4, mobileOrder: 6 },
  { id: "lettres", label: "آداب وفلسفة", colorVar: "--c-red", Icon: BookIcon, order: 5, mobileOrder: 5 },
  { id: "gestion", label: "تسيير واقتصاد", colorVar: "--c-orange", Icon: TrendIcon, order: 6, mobileOrder: 4 },
  { id: "arts", label: "فنون", colorVar: "--c-black", Icon: ArtIcon, order: 7, mobileOrder: 7 },
];

export default function FiliereGrid({ selected, onSelect }) {
  return (
    <div className="filiere-grid">
      {FILIERES.map((item) => (
        <FiliereCard key={item.id} item={item} selected={selected} onSelect={onSelect} />
      ))}
    </div>
  );
}