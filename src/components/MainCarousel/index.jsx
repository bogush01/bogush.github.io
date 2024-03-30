import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";

import "./index.css";

const MainCarousel = () => {
  return (
    <div className="main-carousel">
      <ul className="main-carousel__slides-container">
        <li className="main-carousel__slide slide1"></li>
      </ul>

      <ul className="main-carousel__swicth">
        <li className="main-carousel__swicth-button">
          <input type="radio" className="main-carousel__radio" id="radio1" />
          <label className="main-carousel__label" htmlFor="radio1"></label>
        </li>
      </ul>
    </div>
  );
};

export default MainCarousel;
