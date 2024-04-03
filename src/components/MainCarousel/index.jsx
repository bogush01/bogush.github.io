import { useState } from "react";

import StyledButtonOrLink from "../../components/controls/StyledButtonOrLink";

import slidesData from "./slides_data.js";

import "./index.css";

const MainCarousel = (props) => {
  const { className = "" } = props;
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSwitchChange = (event) => {
    const newIndex = Number(event.target.dataset.index);
    setSelectedSlide(newIndex);
  };

  const carouselSlides = slidesData.map((item, index) => {
    const visibilityModifier =
      selectedSlide === index ? "main-carousel__slide--visible" : "";
    const className = `main-carousel__slide slide${index + 1} ${visibilityModifier}`;

    return (
      <li className={className} key={index}>
        <div className="main-carousel__slide-info">
          <p className="main-carousel__collection-description">
            {item.description}
          </p>
          <StyledButtonOrLink
            className="main-carousel__slide-catalog-link"
            caption="Каталог"
            to={item.link}
          />
        </div>
      </li>
    );
  });

  const switchButtons = slidesData.map((item, index) => {
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
    <div className={`main-carousel ${className}`}>
      <ul className="main-carousel__slides-container">{carouselSlides}</ul>

      <ul className="main-carousel__swicth">{switchButtons}</ul>
    </div>
  );
};

export default MainCarousel;
