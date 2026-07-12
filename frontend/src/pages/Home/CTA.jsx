import HomeConfirmButton from "../../components/HomeConfirmButton/HomeConfirmButton";
import "./CTA.css";

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CTA = ({ onStart }) => {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">جاهز تكتشف التخصصات المتاحة لك؟</h2>
        <p className="cta__text">
          الأمر يأخذ أقل من دقيقتين: شعبتك، معدلك، ومواد أساسية قليلة.
        </p>

        <HomeConfirmButton
          label="ابدأ توجيهي الآن"
          variant="onDark"
          icon="leftPurple"
          onClick={onStart}
        />

        <div className="cta__credits">
          <p className="cta__made-with">
            Made with <span className="cta__heart">❤️</span> by Wejehni
          </p>
          <p className="cta__authors">
            Authors :{" "}
            <a className="cta__author-link" href="mailto:oi_boughari@esi.dz">
              <EmailIcon />
              Boughari Imene
            </a>
            {" , "}
            <a className="cta__author-link" href="mailto:os_lallali@esi.dz">
              <EmailIcon />
              Lallali Sirine
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;