import CurrentProductsList from "../../components/CurrentProductsList";
import BackTextHeader from "../../components/BackTextHeader";
import SectionContacts from "../../components/SectionContacts";

import "./index.css";

const Collections = () => {
  return (
    <>
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
