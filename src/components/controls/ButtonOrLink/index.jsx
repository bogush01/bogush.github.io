import { Link } from "react-router-dom";

import "./index.css";

const ButtonOrLink = (props) => {
  const { caption, className } = props;

  return <button className={`button-or-link ${className}`}>{caption}</button>;
};

export default ButtonOrLink;
