import { Link } from "react-router-dom";

import HeroBlock from "../../components/HeroBlock";
import BackTextHeader from "../../components/BackTextHeader";
import CurrentProductsList from "../../components/CurrentProductsList";
import SectionContacts from "../../components/SectionContacts";
import MainCarousel from "../../components/MainCarousel";

import "./index.css";

const MainPage = () => {
  return (
    <>
      <HeroBlock />
      <section className="section">
        <BackTextHeader
          className="back-text-header-class"
          backText="На этот сезон"
          backTextClassName="back-text-class"
          childrenContainerClassName="children-container-left"
        >
          <h2 className="children-class">На этот сезон</h2>
        </BackTextHeader>
        <MainCarousel />
      </section>
      <section>
        <BackTextHeader
          className="back-text-header-class"
          backText="Актуальное"
          backTextClassName="back-text-class"
          childrenContainerClassName="children-container-right"
        >
          <h2 className="children-class">Акутальное</h2>
        </BackTextHeader>
        <CurrentProductsList className="pb-111" />
      </section>
      <SectionContacts />
    </>
  );
};

export default MainPage;
