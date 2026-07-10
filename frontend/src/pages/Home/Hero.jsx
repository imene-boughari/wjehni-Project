import illustration from "../../assets/images/accuiel.png";
import arrowGreen from "../../assets/images/Subtract-vert.png";
import HomeConfirmButton from "../../components/HomeConfirmButton/HomeConfirmButton";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = ({ onStart }) => {
  return (
    <section className="hero">
      <img src={arrowGreen} alt="" aria-hidden="true" className="hero__doodle-green" />

      <div className="container hero__inner">
        <div className="hero__illustration">
          <img src={illustration} alt="رسم توضيحي للتوجيه بعد الباك" />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            معدلك يفتح لك أبوابًا كثيرة،
            <br />
            <span className="hero__title-accent">
              نساعدك لتختار الباب الصحيح
            </span>
          </h1>

          <p className="hero__text">
            أدخل شعبتك ومعدلاتك، ووجّهني يقترح عليك كل التخصصات والمدارس
            والجامعات التي يمكنك الالتحاق بها فعليًا، مع الولاية والمعدل
            الأدنى المطلوب لكل واحدة.
          </p>

          <div className="hero__actions">
            <HomeConfirmButton
              label="ابدأ توجيهي"
              variant="primary"
              icon="leftWhite"
              onClick={onStart}
            />
            <HomeConfirmButton
              label="كيف يعمل؟"
              variant="outline"
              icon="down"
              onClick={() => scrollToSection("comment-ca-marche")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;