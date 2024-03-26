import ProductPosition from "../../components/ProductPosition";

import "./index.css";

const CurrentProductsList = () => {
  return (
    <ul className="current-products-list">
      <li>
        <ProductPosition />
      </li>
      <li>
        <ProductPosition />
      </li>
      <li>
        <ProductPosition />
      </li>
      <li>
        <ProductPosition />
      </li>
    </ul>
  );
};

export default CurrentProductsList;
