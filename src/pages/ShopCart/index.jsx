import BackTextHeader from "../../components/BackTextHeader";
import ShopCartList from "../../components/ShopCartList";

import "./index.css";

const ShopCart = () => {
  return (
    <>
      <BackTextHeader
        className="shop-cart__header"
        backText="Корзина"
        backTextClassName="shop-cart-back-text"
      />
      <div className="shop-cart">
        <div className="shop-cart__cart-content">
          <ShopCartList className="shop-cart__list" />
          <div className="shop-cart__bill">
            <p className="shop-cart__bill-text">
              Сумма доставки будет расчитана после ввода данных о месте
              назначения — город, улица
            </p>
            <dl className="shop-cart__bill-items">
              <div className="shop-cart__bill-item"></div>
            </dl>
          </div>
        </div>
        <form>форма</form>
      </div>
    </>
  );
};

export default ShopCart;
