import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { getSpecialitiesUrl } from '../../hooks/useSpecialities'
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
  const testFilters = {
    filiere_bac: 'لغات أجنبية',
    spe: 'ألمانية',
    moyenne: '14.01',
    note_ar: '19',
    note_L3: '19',
    note_fr: '16',
    note_ang: '20',
  }

  const { data, error, isLoading } = useSWR(getSpecialitiesUrl(testFilters), fetcher)

  console.log('data:', data)
  console.log('error:', error)
  console.log('isLoading:', isLoading)

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