import { useState } from "react";
import bgPatternDesktop from "../../assets/images/bg-pattern.png";
import bgPatternMobile from "../../assets/images/Group_14.png";
import arrowRed from "../../assets/images/Subtract-rouge.png";
import Navbar from "../../components/Navbar/Navbar";
import Stepper from "../../components/Stepper/Stepper";
import FiliereGrid from "../../components/FiliereGrid/FiliereGrid";
import ConfirmButton from "../../components/ConfirmButton/ConfirmButton";
import Footer from "../../components/Footer/Footer";
import dashLine from "../../assets/images/trait-discontinue.png";
import { ChevronIcon } from "../../components/icons/Icons";
import "./FiliereSelectionPage.css";

export default function FiliereSelectionPage({ onNext, onBackHome }) {
  const [selected, setSelected] = useState(null);

  const handleConfirm = () => {
    if (!selected) return;
    onNext?.(selected);
  };

  return (
    <div className="page">
      <img src={bgPatternDesktop} alt="" className="page__bg page__bg--desktop" />
      <img src={bgPatternMobile} alt="" className="page__bg page__bg--mobile" />

      <img src={arrowRed} alt="" className="page__corner-arrow" />

      <img src={dashLine} alt="" className="doodle--left" />

      <Navbar />

      <main className="content">
        <Stepper activeStep={1} />

        <section className="card">
          <h1 className="card__title">اختر شعبتك في البكالوريا</h1>
          <p className="card__subtitle">
            حدد الشعبة التي تدرسها هذا العام، حتى نقترح عليك المواد المناسبة والتخصصات الممكنة.
          </p>

          <FiliereGrid selected={selected} onSelect={setSelected} />

          <div className="actions-row">
            <ConfirmButton disabled={!selected} onClick={handleConfirm} />

            <button type="button" className="back-home-btn" onClick={onBackHome}>
              <ChevronIcon />
              رجوع
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}