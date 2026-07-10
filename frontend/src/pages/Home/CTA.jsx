import HomeConfirmButton from "../../components/HomeConfirmButton/HomeConfirmButton";

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
      </div>
    </section>
  );
};

export default CTA;