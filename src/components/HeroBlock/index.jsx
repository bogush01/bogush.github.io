import clothesForEveryone from "../../img/clothes_for_everyone.png";

import BackTextHeader from "../BackTextHeader";
import StyledButtonOrLink from "../controls/StyledButtonOrLink";

import "./index.css";

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <div className="hero-block__logo"></div>
      <BackTextHeader
        className="hero-block__back-text-header"
        backText="Одежда для каждого"
        backTextClassName="back-text-class-name"
        childrenContainerClassName="children-container-class-name"
      >
        <h2 className="hero-block__clothes-for-everyone">Одежда для каждого</h2>
      </BackTextHeader>
      <p className="hero-block__small-text">На каждый день</p>
      <StyledButtonOrLink
        to="/catalog"
        className="hero-block__link-to-catalog"
        caption="КАТАЛОГ"
      />
    </div>
  );
};

export default HeroBlock;
