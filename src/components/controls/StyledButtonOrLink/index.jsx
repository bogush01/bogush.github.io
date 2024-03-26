import { Link } from "react-router-dom";

import "./index.css";

const StyledButtonOrLink = (props) => {
  const { caption = "", className = "", to, buttonType, onClick } = props;

  if (to !== undefined) {
    return (
      <Link className={`button-or-link ${className}`} to={to}>
        {caption}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`button-or-link ${className}`}
    >
      {caption}
    </button>
  );
};

export default StyledButtonOrLink;
