import { Link } from "react-router-dom";

import Socials from "../Socials/";

import logoPic from "../../img/logo.png";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top-part">
        <Link to="/">
          <img className="header__logo" src={logoPic} alt="" />
        </Link>
        <nav className="header__main-menu-conainer">
          <ul className="header__main-menu">
            <li>
              <Link className="header__main-menu-link" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/">
                Коллекция
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/">
                O нас
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/">
                Контакты
              </Link>
            </li>
            <li>
              <Link className="header__main-menu-link" to="/">
                Корзина
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__main-menu-link">
          <Socials />
        </div>
      </div>
      <ul className="header__gender-menu">
        <li>
          <Link className="header__gender-menu-link" to="/">
            Девушкам
          </Link>
        </li>
        <li>
          <Link className="header__gender-menu-link" to="/">
            Мужчинам
          </Link>
        </li>
        <li>
          <Link className="header__gender-menu-link" to="/">
            Унисекс
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
