import StyledCheckbox from "../../controls/StyledCheckbox";
import StyledRadio from "../../controls/StyledRadio";
import StyledButtonOrLink from "../../controls/StyledButtonOrLink";

import "./index.css";

const MakeOrderForm = () => {
  return (
    <form className="make-order-form">
      <fieldset className="make-order-form__fieldset">
        <legend className="make-order-form__fieldset-legend">
          Данные получателя
        </legend>
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="Фамилия"
        />
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="Имя"
        />
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="Отчество"
        />
      </fieldset>

      <fieldset className="make-order-form__fieldset">
        <legend className="make-order-form__fieldset-legend">
          Контактный номер телефона
        </legend>
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="+7 (   )   -  -  "
        />
      </fieldset>

      <fieldset className="make-order-form__fieldset">
        <legend className="make-order-form__fieldset-legend">
          Данные места доставки
        </legend>
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="Город"
        />
        <input
          type="text"
          className="make-order-form__textfield"
          placeholder="Улица"
        />
        <div className="make-order-form__fieldset-row">
          <input
            type="text"
            className="make-order-form__textfield textfield-short"
            placeholder="Дом"
          />
          <input
            type="text"
            className="make-order-form__textfield textfield-short"
            placeholder="Кв/офис"
          />
        </div>
      </fieldset>
      {/*      <div className="make-order-form__fieldset-row">
        <StyledCheckbox caption="оплата online" />
        <StyledCheckbox caption="наложенным платежом" />
      </div>*/}
      <StyledCheckbox
        captionClassName="make-order-form__personal-data-caption"
        caption="Согласие на обработку персональных данных"
      />
      <StyledRadio caption="Надпись один" name="q1" checked={true} />
      <StyledRadio caption="Надпись два" name="q1" checked={true} />
      <StyledButtonOrLink
        caption="Оформить"
        type="button"
        className="make-order-form__submit"
      />
    </form>
  );
};

export default MakeOrderForm;
