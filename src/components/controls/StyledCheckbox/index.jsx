import "./index.css";

const StyledCheckbox = (props) => {
  const { className = "", captionClassName = "", caption = "" } = props;

  return (
    <label className={`styled-checkbox ${className}`}>
      <input type="checkbox" className="styled-checkbox__checkbox" />
      <div className="styled-checkbox__fake-checkbox"></div>
      <span className={`styled-checkbox__caption ${captionClassName}`}>
        {caption}
      </span>
    </label>
  );
};

export default StyledCheckbox;
