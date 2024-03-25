import "./index.css";

import clothesForEveryone from "../../img/clothes_for_everyone.png";

const BackTextHeader = (props) => {
  // const {backText} = props;

  return (
    <div className="back-text-header">
      <div className="back-text-header">
        <p className="back-text">Одежда для каждого</p>
        <div className="back-text-main-content-container">
          <img
            className="back-text-main-content"
            src={clothesForEveryone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BackTextHeader;
