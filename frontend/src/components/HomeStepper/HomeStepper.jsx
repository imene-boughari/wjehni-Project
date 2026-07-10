import { Compass, Gauge, ClipboardList } from "lucide-react";
import "./HomeStepper.css";

const STEPS = [
  {
    number: "01",
    icon: Compass,
    iconClass: "home-step-card__icon--blue",
    title: "اختر شعبتك",
    text: "حدد شعبتك في البكالوريا من بين الشعب الست المتاحة.",
  },
  {
    number: "02",
    icon: Gauge,
    iconClass: "home-step-card__icon--orange",
    title: "أدخل معدلاتك",
    text: "معدل البكالوريا العام، ثم معدلات موادك الأساسية.",
  },
  {
    number: "03",
    icon: ClipboardList,
    iconClass: "home-step-card__icon--green",
    title: "اكتشف تخصصك",
    text: "قائمة بكل التخصصات والمدارس المتاحة لك، مرتبة وقابلة للفلترة.",
  },
];

const HomeStepper = () => {
  return (
    <section id="comment-ca-marche" className="home-stepper">
      <div className="container">
        <p className="home-stepper__eyebrow">ثلاث خطوات فقط</p>
        <h2 className="home-stepper__title">كيف يعمل وجّهني؟</h2>

        <div className="home-stepper__grid">
          {STEPS.map(({ number, icon: Icon, iconClass, title, text }) => (
            <article className="home-step-card" key={number}>
              <div className={`home-step-card__icon ${iconClass}`}>
                <Icon size={26} strokeWidth={2} />
              </div>
              <span className="home-step-card__number">{number}</span>
              <h3 className="home-step-card__title">{title}</h3>
              <p className="home-step-card__text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStepper;