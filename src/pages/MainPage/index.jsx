import { Link } from "react-router-dom";

import HeroBlock from "../../components/HeroBlock";
import BackTextHeader from "../../components/BackTextHeader";
import CurrentProductsList from "../../components/CurrentProductsList";
import Socials from "../../components/Socials";

import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";
import map from "../../img/map.jpg";

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
        <div className="main-carousel">
          <img
            className="main-carousel__preview"
            src={mainCarouselPreview}
            alt=""
          />
        </div>
      </section>
      <section className="section">
        <BackTextHeader
          className="back-text-header-class"
          backText="Актуальное"
          backTextClassName="back-text-class"
          childrenContainerClassName="children-container-right"
        >
          <h2 className="children-class">Акутальное</h2>
        </BackTextHeader>
        <CurrentProductsList className="current-products-list-mb62" />
        <div className="link-show-more-connainer">
          <Link className="link-show-more" to="/">
            Смотреть больше
          </Link>
        </div>
      </section>
      <section className="section">
        <BackTextHeader
          className="back-text-header-class"
          backText="Контакты"
          backTextClassName="back-text-class-contacts"
          childrenContainerClassName="children-container-left"
        >
          <h2 className="children-class">Мы всегда на связи</h2>
        </BackTextHeader>
        <div className="connection-block">
          <img src={map} alt="" />
          <ul className="contacts">
            <li>
              <a href="tel:+78000000000">8 (800) 000-00-00</a>
            </li>
            <li>
              <a href="mailto:info@advolatum.ru">info@advolatum.ru</a>
            </li>
            <li>
              <Socials />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MainPage;
