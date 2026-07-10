import bgPattern from "../../assets/images/bg-pattern.png";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import HomeStepper from "../../components/HomeStepper/HomeStepper";
import HomeFiliereGrid from "../../components/HomeFiliereGrid/HomeFiliereGrid";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Hero from "./Hero";
import StatsBar from "./StatsBar";
import CTA from "./CTA";
import "./Home.css";

const Home = ({ onStart }) => {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <HomeNavbar onStart={onStart} />
      <Hero onStart={onStart} />
      <StatsBar />
      <HomeStepper />
      <HomeFiliereGrid />
      <CTA onStart={onStart} />
      <HomeFooter />
    </div>
  );
};

export default Home;