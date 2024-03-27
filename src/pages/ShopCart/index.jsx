import BackTextHeader from "../../components/BackTextHeader";
import ShopCartList from "../../components/ShopCartList";

import "./index.css";

const ShopCart = () => {
  return (
    <div className="shop-cart">
      <BackTextHeader
        backText="Корзина"
        backTextClassName="shop-cart-back-text"
      />
      <ShopCartList />
    </div>
  );
};

export default ShopCart;
