import {
  Cpu,
  HeartPulse,
  Atom,
  Calculator,
  Scale,
  TrendingUp,
  Leaf,
  Languages,
} from "lucide-react";
import arrowYellow from "../../assets/images/Subtract-jaune.png";
import "./HomeFiliereGrid.css";

const DOMAINES = [
  { icon: Cpu, colorClass: "home-domaine-card__icon--blue", label: "الهندسة والتكنولوجيا" },
  { icon: HeartPulse, colorClass: "home-domaine-card__icon--red", label: "الطب والصحة" },
  { icon: Atom, colorClass: "home-domaine-card__icon--teal", label: "العلوم الدقيقة" },
  { icon: Calculator, colorClass: "home-domaine-card__icon--purple", label: "الإعلام الآلي" },
  { icon: Scale, colorClass: "home-domaine-card__icon--violet", label: "الحقوق والعلوم السياسية" },
  { icon: TrendingUp, colorClass: "home-domaine-card__icon--orange", label: "الاقتصاد والتسيير" },
  { icon: Leaf, colorClass: "home-domaine-card__icon--green", label: "العلوم الفلاحية" },
  { icon: Languages, colorClass: "home-domaine-card__icon--skyblue", label: "الآداب واللغات" },
];

const HomeFiliereGrid = () => {
  return (
    <section id="majalat" className="home-domaines-section">
      <div className="container">
        <h2 className="home-domaines-section__title">مجالات تغطي كل الاهتمامات</h2>
        <p className="home-domaines-section__subtitle">
          من الطب إلى الفلاحة، مرورًا بالهندسة والحقوق والآداب
        </p>

        <div className="home-domaines-grid">
          {DOMAINES.map(({ icon: Icon, colorClass, label }) => (
            <div className="home-domaine-card" key={label}>
              <span className={`home-domaine-card__icon ${colorClass}`}>
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="home-domaine-card__label">{label}</span>
            </div>
          ))}
        </div>

        <img
          src={arrowYellow}
          alt=""
          aria-hidden="true"
          className="home-domaines-section__arrow"
        />
      </div>
    </section>
  );
};

export default HomeFiliereGrid;