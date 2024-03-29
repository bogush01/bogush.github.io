import BackTextHeader from "../../components/BackTextHeader";
import SectionContacts from "../../components/SectionContacts";

import galPhoto1 from "../../img/about_us_gallery/1.jpg";
import galPhoto2 from "../../img/about_us_gallery/2.jpg";
import galPhoto3 from "../../img/about_us_gallery/3.jpg";

import "./index.css";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <BackTextHeader
          className="about-us__back-text-header-class"
          backText="О нас"
          backTextClassName="about-us__back-text-class"
          childrenContainerClassName="about-us__children-container-right"
        >
          <h2 className="about-us__children-class">О нас</h2>
        </BackTextHeader>
        <p className="about-us__text">
          Разнообразный и богатый опыт новая модель организационной деятельности
          позволяет оценить значение позиций, занимаемых участниками в отношении
          поставленных задач. Повседневная практика показывает, что реализация
          намеченных плановых заданий представляет собой интересный эксперимент
          проверки новых предложений. Идейные соображения высшего порядка, а
          также начало повседневной работы по формированию позиции играет важную
          роль в формировании соответствующий условий активизации. Задача
          организации, в особенности же начало повседневной работы по
          формированию позиции требуют от нас анализа направлений прогрессивного
          развития. Повседневная практика показывает, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности
          позволяет оценить значение соответствующий условий активизации.
        </p>
        <ul className="about-us__gallery">
          <li>
            <img src={galPhoto1} alt="" className="about-us__gallery-photo" />
          </li>
          <li>
            <img src={galPhoto2} alt="" className="about-us__gallery-photo" />
          </li>
          <li>
            <img src={galPhoto3} alt="" className="about-us__gallery-photo" />
          </li>
        </ul>
        <SectionContacts />
      </section>
    </>
  );
};

export default AboutUs;
