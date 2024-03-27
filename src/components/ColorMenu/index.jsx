import { Link } from "react-router-dom";

import "./index.css";

const ColorMenu = () => {
  return (
    <ul className="color-menu">
      <li>
        <Link to="/" className="color-menu_circle circle-white"></Link>
      </li>
      <li>
        <Link to="/" className="color-menu_circle circle-black invert"></Link>
      </li>
      <li>
        <Link to="/" className="color-menu_circle circle-green"></Link>
      </li>
      <li>
        <Link to="/" className="color-menu_circle circle-yellow"></Link>
      </li>
      <li>
        <Link to="/" className="color-menu_circle circle-violet"></Link>
      </li>
    </ul>
  );
};

export default ColorMenu;
