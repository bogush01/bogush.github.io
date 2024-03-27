import ProductPosition from "../ProductPosition";

import "./index.css";

const CatalogList = () => {
  const items = [];

  for (let i = 0; i < 6; i++) {
    const li = (
      <li key={i}>
        <ProductPosition />
      </li>
    );
    items.push(li);
  }

  return <ul className="catalog-list">{items}</ul>;
};

export default CatalogList;
