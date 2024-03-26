import { Link } from "react-router-dom";

import HeroBlock from "../../components/HeroBlock";
import BackTextHeader from "../../components/BackTextHeader";
import CurrentProductsList from "../../components/CurrentProductsList";

import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";

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
    </>
  );
};

export default MainPage;
