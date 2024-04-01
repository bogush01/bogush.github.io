import { Link } from "react-router-dom";

import BackTextHeader from "../../components/BackTextHeader";
import CatalogSideMenu from "../../components/CatalogSideMenu";
import ColorMenu from "../../components/ColorMenu";
import CatalogList from "../../components/CatalogList";

import "./index.css";

const Catalog = () => {
  return (
    <>
      {/*<BackTextHeader
        className="page-header"
        backText="Каталог"
        backTextClassName="catalog-block-header"
      />
      <h2>Каталог</h2>
      <BackTextHeader />*/}

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
        <CatalogList />
      </div>
    </>
  );
};

export default Catalog;
