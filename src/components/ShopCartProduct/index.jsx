import { Link } from "react-router-dom";

import Counter from "../../components/Counter";

import photo from "../../img/shop_cart/photo1.jpg";

import "./index.css";

const ShopCartProduct = () => {
  return (
    <div className="shop-cart-product">
      <Link to="/">
        <img className="shop-cart-product__photo" src={photo} alt="" />
      </Link>
      <div className="shop-cart-product__about">
        <Link to="/" className="shop-cart-product__title">
          Костюм Advolatum — соцветие Костюм Advolatum — соцветие Костюм
          Advolatum — соцветие
        </Link>
        <ul className="shop-cart-product__features">
          <li>Размер: M</li>
          <li>
            <Counter />
          </li>
          <li>Стоимость: 3751 </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopCartProduct;
