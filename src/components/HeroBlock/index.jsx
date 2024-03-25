import logo from "../../img/logo.png";
import clothesForEveryone from "../../img/clothes_for_everyone.png";

import BackTextHeader from "../BackTextHeader";

import "./index.css";

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <img className="hero-block__logo" src={logo} alt="" />
      <BackTextHeader />
    </div>
  );
};

export default HeroBlock;
