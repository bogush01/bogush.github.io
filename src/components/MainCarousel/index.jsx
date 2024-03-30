import mainCarouselPreview from "../../img/main-carousel/main_carousel_preview.png";

import "./index.css";

const MainCarousel = () => {
  return (
    <div className="main-carousel">
      <img
        className="main-carousel__preview"
        src={mainCarouselPreview}
        alt=""
      />
    </div>
  );
};

export default MainCarousel;
