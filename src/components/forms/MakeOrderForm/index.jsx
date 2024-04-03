import StyledCheckbox from "../../controls/StyledCheckbox";
import StyledRadio from "../../controls/StyledRadio";
import StyledButtonOrLink from "../../controls/StyledButtonOrLink";

import "./index.css";

const MakeOrderForm = (props) => {
  const { onSubmitForm } = props;
  const radioChecked = true;

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
      <fieldset className="make-order-form__fieldset">
        <legend className="make-order-form__fieldset-legend">
          Способ оплаты
        </legend>
        <StyledRadio
          className="make-order-form__radio"
          checked={radioChecked}
          name="payway"
          caption="оплата online"
        />
        <StyledRadio
          className="make-order-form__radio"
          checked={!radioChecked}
          name="payway"
          caption="наложенным платежом"
        />
      </fieldset>

      <StyledCheckbox
        captionClassName="make-order-form__personal-data-caption"
        caption="Согласие на обработку персональных данных"
      />
      <StyledButtonOrLink
        onClick={onSubmitForm}
        caption="Оформить"
        type="button"
        className="make-order-form__submit"
      />
    </form>
  );
};

export default MakeOrderForm;
