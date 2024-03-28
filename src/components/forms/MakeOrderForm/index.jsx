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
    </form>
  );
};

export default MakeOrderForm;
