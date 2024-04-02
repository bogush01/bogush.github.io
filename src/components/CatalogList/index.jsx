import ProductPosition from "../ProductPosition";

import "./index.css";

const CatalogList = (props) => {
  const { onBuyProduct } = props;

  const items = [];

  for (let i = 0; i < 6; i++) {
    const li = (
      <li key={i}>
        <ProductPosition onBuyProduct={onBuyProduct} />
      </li>
    );
    items.push(li);
  }

  return <ul className="catalog-list">{items}</ul>;
};

export default CatalogList;
