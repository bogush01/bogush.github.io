import ShopCartProduct from "../ShopCartProduct";

import "./index.css";

const ShopCartList = () => {
  return (
    <ul className="shop-cart-list">
      <li>
        <ShopCartProduct />
      </li>
      <li>
        <ShopCartProduct />
      </li>
    </ul>
  );
};

export default ShopCartList;
