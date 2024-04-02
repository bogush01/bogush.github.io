import { Link } from "react-router-dom";

import BackTextHeader from "../../components/BackTextHeader";
import CatalogSideMenu from "../../components/CatalogSideMenu";
import ColorMenu from "../../components/ColorMenu";
import CatalogList from "../../components/CatalogList";

import "./index.css";

const Catalog = () => {
  const handleProductBuy = () => {
    alert("Товар добавлен в корзину");
  };

  return (
    <>
      <BackTextHeader
        className="catalog__page-header"
        backText="Каталог"
        backTextClassName="catalog-block-header"
        childrenContainerClassName="catalog__children-container-left"
      >
        <h2 className="catalog__children-class">Каталог</h2>
      </BackTextHeader>

      <div className="catalog-block">
        <aside className="catalog-block__aside">
          <CatalogSideMenu className="catalog-block__side-menu" />
          <ColorMenu />
        </aside>
        <CatalogList onBuyProduct={handleProductBuy} />
      </div>
    </>
  );
};

export default Catalog;
