import "./index.css";

import clothesForEveryone from "../../img/clothes_for_everyone.png";

const BackTextHeader = (props) => {
  const {
    children,
    className = "",
    backText,
    backTextClassName = "",
    childrenContainerClassName = "",
  } = props;

  return (
    <div className={`back-text-container ${className}`}>
      <p className={`back-text ${backTextClassName}`}>{backText}</p>
      <div className={`children-container ${childrenContainerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default BackTextHeader;
