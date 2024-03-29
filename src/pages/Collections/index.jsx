import { Link } from "react-router-dom";

import CurrentProductsList from "../../components/CurrentProductsList";
import BackTextHeader from "../../components/BackTextHeader";
import SectionContacts from "../../components/SectionContacts";

import pic1 from "../../img/current_collection/1.jpg";
import pic2 from "../../img/current_collection/2.jpg";
import pic3 from "../../img/current_collection/3.jpg";
import pic4 from "../../img/current_collection/4.jpg";

import "./index.css";

const Collections = () => {
  return (
    <>
      <section className="current-collection">
        <div className="current-collection__header-part">
          <BackTextHeader
            className="collection-products__header"
            backText="Классика"
            childrenContainerClassName="collection-products__children-container"
          />
          <Link className="current-collection__other-collections">
            Другие коллекции
          </Link>
        </div>
        <p className="current-collection__description">
          коллекция была создана для людей учитывающие детали в своей
          повседневной жизни В перфомансе стиля мы хотели приподнести легкость и
          комфорт, к которому стремится каждый
        </p>
        <div className="current-collection__colums">
          <div className="current-collection__left-col">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" className="current-collection__photo2" />
            <img src={pic3} alt="" />
          </div>
          <div className="current-collection__right-col">
            <img src={pic4} alt="" className="current-collection__photo4" />
          </div>
        </div>
      </section>

      <section className="collection-products">
        <BackTextHeader
          className="collection-products__header"
          backText="Актуальное"
          childrenContainerClassName="collection-products__children-container"
        >
          <h2 className="collection-products__children-class">
            Товары коллекции
          </h2>
        </BackTextHeader>
        <CurrentProductsList />
      </section>
      <SectionContacts />
    </>
  );
};

export default Collections;
