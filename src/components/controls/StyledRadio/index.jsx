import "./index.css";

const StyledRadio = (props) => {
  const { className = "", caption = "", name = "", checked = false } = props;

  return (
    <label className={`styled-radio ${className}`}>
      <input
        type="radio"
        name={name}
        className="styled-radio__radio"
        defaultChecked={checked}
      />
      <span className="styled-radio__radio-wrapper">
        <span className="styled-radio__fake-radio"></span>
      </span>
      <span className="styled-radio__caption">{caption}</span>
    </label>
  );
};

export default StyledRadio;
