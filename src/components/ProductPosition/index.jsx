import pic1 from "../../img/products_positions/p1.jpg";

import { Link } from "react-router-dom";

import "./index.css";

const ProductPosition = (props) => {
  const { onBuyProduct } = props;

  return (
    <div className="product-position">
      <Link to="/">
        <img className="product-position__photo" src={pic1} alt="" />
      </Link>
      <Link to="/" className="product-position__title">
        Костюм Advolatum соцветие
      </Link>
      <div className="product-position__cart-panel">
        <span>3751 ₽</span>
        <button onClick={onBuyProduct} className="product-position__button-buy">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductPosition;
