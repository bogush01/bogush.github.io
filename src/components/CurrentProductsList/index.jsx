import ProductPosition from "../../components/ProductPosition";

import "./index.css";

const CurrentProductsList = (props) => {
  const { className = "" } = props;

  return (
    <ul className={`current-products-list ${className}`}>
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
