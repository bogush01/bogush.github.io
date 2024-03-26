import pic1 from "../../img/products_positions/p1.jpg";

import { Link } from "react-router-dom";

import "./index.css";

const ProductPosition = () => {
  return (
    <div className="product-position">
      <img className="product-position__photo" src={pic1} alt="" />
    </div>
  );
};

export default ProductPosition;
