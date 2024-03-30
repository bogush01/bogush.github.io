import { useState } from "react";

import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";

import "./index.css";

const SLIDES_COUNT = 1;

const MainCarousel = () => {
  const handleSwitchChange = (e) => {
    console.clear();
    console.log(e.target.dataset.index);
  };

  const [selectedSlide, setSelectedSlide] = useState(0);

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
        <li className="main-carousel__slide slide1"></li>
      </ul>

      <ul className="main-carousel__swicth">{switchButtons}</ul>
    </div>
  );
};

export default MainCarousel;
