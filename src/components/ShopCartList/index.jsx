import ShopCartProduct from "../ShopCartProduct";

import "./index.css";

const ShopCartList = (props) => {
  const { className = "" } = props;

  return (
    <ul className={`shop-cart-list ${className}`}>
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
