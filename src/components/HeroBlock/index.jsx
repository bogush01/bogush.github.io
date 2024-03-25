import logo from "../../img/logo.png";
import clothesForEveryone from "../../img/clothes_for_everyone.png";

import "./index.css";

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <img className="hero-block__logo" src={logo} alt="" />
      <div className="hero-block__back-text-header">
        <div className="back-text-header">
          <p className="back-text">Одежда для каждого</p>
          <div className="back-text-main-content-container">
            <img
              className="back-text-main-content"
              src={clothesForEveryone}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
