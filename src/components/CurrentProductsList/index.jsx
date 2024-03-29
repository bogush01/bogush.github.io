import { Link } from "react-router-dom";

import ProductPosition from "../../components/ProductPosition";

import "./index.css";

const CurrentProductsList = (props) => {
  const { className = "" } = props;

  return (
    <>
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
      <div className="link-show-more-connainer">
        <Link className="link-show-more" to="/">
          Смотреть больше
        </Link>
      </div>
    </>
  );
};

export default CurrentProductsList;
