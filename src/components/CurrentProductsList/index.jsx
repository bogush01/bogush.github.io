import { Link } from "react-router-dom";

import ProductPosition from "../../components/ProductPosition";

import "./index.css";

const CurrentProductsList = (props) => {
  const { className = "" } = props;

  return (
    <div className={`current-products-list-wrapper ${className}`}>
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
      <div className="link-show-more-connainer">
        <Link className="link-show-more" to="/">
          Смотреть больше
        </Link>
      </div>
    </div>
  );
};

export default CurrentProductsList;
