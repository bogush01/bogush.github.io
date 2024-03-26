import { Link } from "react-router-dom";

import BackTextHeader from "../../components/BackTextHeader";

import "./index.css";

const Catalog = () => {
  return (
    <>
      <BackTextHeader
        className="page-header"
        backText="Коллекции"
        backTextClassName="catalog-block-header"
      ></BackTextHeader>

      <div className="catalog-block">
        <aside className="catalog-block__aside"></aside>
      </div>
    </>
  );
};

export default Catalog;
