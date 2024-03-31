import BackTextHeader from "../../components/BackTextHeader";
import Socials from "../../components/Socials";

import map from "../../img/map.jpg";

import "./index.css";

const SectionContacts = () => {
  return (
    <section className="section-contacts">
      <BackTextHeader
        className="section-contacts__back-text-header-class"
        backText="Контакты"
        backTextClassName="back-text-class-contacts"
        childrenContainerClassName="children-container-left"
      >
        <h2 className="section-contacts__children-class">Мы всегда на связи</h2>
      </BackTextHeader>
      <div className="connection-block">
        <img src={map} alt="" className="section-contacts__map" />
        <ul className="contacts">
          <li>
            <a className="contacts-link" href="tel:+78000000000">
              8 (800) 000-00-00
            </a>
          </li>
          <li>
            <a className="contacts-link" href="mailto:info@advolatum.ru">
              info@advolatum.ru
            </a>
          </li>
          <li>
            <Socials />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionContacts;
