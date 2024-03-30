import { useState } from "react";
import { Link } from "react-router-dom";

import StyledButtonOrLink from "../../components/controls/StyledButtonOrLink";

import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";

import "./index.css";

const SLIDES_COUNT = 5;

const MainCarousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSwitchChange = (event) => {
    const newIndex = Number(event.target.dataset.index);
    setSelectedSlide(newIndex);
  };

  const switchButtons = Array(SLIDES_COUNT)
    .fill(null)
    .map((item, index) => {
      const labelId = `radio${index}`;

      return (
        <li className="main-carousel__swicth-button" key={index}>
          <input
            type="radio"
            className="main-carousel__radio"
            id={labelId}
            name="main-carousel"
            data-index={index}
            onChange={handleSwitchChange}
            checked={selectedSlide === index}
          />
          <label className="main-carousel__label" htmlFor={labelId}></label>
        </li>
      );
    });

  return (
    <div className="main-carousel">
      <ul className="main-carousel__slides-container">
        <li className="main-carousel__slide slide1">
          <div className="main-carousel__slide-info">
            <p className="main-carousel__collection-description">
              Текст описания конкретной коллекции с возможным дополнением
              уникальности
            </p>
            <StyledButtonOrLink
              className="main-carousel__slide-catalog-link"
              caption="Каталог"
              to="/catalog"
            />
          </div>
        </li>
      </ul>

      <ul className="main-carousel__swicth">{switchButtons}</ul>
    </div>
  );
};

export default MainCarousel;
