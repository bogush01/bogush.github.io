import BackTextHeader from "../../components/BackTextHeader";
import ShopCartList from "../../components/ShopCartList";
import MakeOrderForm from "../../components/forms/MakeOrderForm";

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
            <dl className="shop-cart__bill-items-list">
              <div className="shop-cart__bill-item">
                <dd className="shop-cart__bill-item-dd">Доставка: </dd>
                <dt className="shop-cart__bill-item-dt">500 ₽</dt>
              </div>
              <div className="shop-cart__bill-item">
                <dd className="shop-cart__bill-item-dd">Итого: </dd>
                <dt className="shop-cart__bill-item-dt">4251 ₽</dt>
              </div>
            </dl>
          </div>
        </div>
        <div className="shop-cart__form-container">
          <div className="shop-cart__form-header">Оформление заказа</div>
          <MakeOrderForm />
        </div>
      </div>
    </>
  );
};

export default ShopCart;
