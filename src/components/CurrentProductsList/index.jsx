import { Link } from "react-router-dom";

import ProductPosition from "../../components/ProductPosition";

import "./index.css";

const CurrentProductsList = (props) => {
  const { className = "", onBuyProduct } = props;

  const products = Array(4)
    .fill("")
    .map((item, index) => {
      return (
        <li key={index}>
          <ProductPosition onBuyProduct={onBuyProduct} />
        </li>
      );
    });

  return (
    <div className={`current-products-list-wrapper ${className}`}>
      <ul className="current-products-list">{products}</ul>
      <div className="link-show-more-connainer">
        <Link className="link-show-more" to="/">
          Смотреть больше
        </Link>
      </div>
    </div>
  );
};

export default CurrentProductsList;
