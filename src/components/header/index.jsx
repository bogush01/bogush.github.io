import { Link } from "react-router-dom";

import logoPic from "../../img/logo.png";

import { ReactComponent as SocVk } from "../../svg/socials/ico_vk.svg";
import { ReactComponent as SocTg } from "../../svg/socials/ico_tg.svg";
import { ReactComponent as SocInst } from "../../svg/socials/ico_inst.svg";
import { ReactComponent as SocTiktok } from "../../svg/socials/ico_tiktok.svg";

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
        <ul className="social-buttons">
          <li>
            <a href="#">
              <SocVk />
            </a>
          </li>
          <li>
            <a href="#">
              <SocTg />
            </a>
          </li>
          <li>
            <a href="#">
              <SocInst />
            </a>
          </li>
          <li>
            <a href="#">
              <SocTiktok />
            </a>
          </li>
        </ul>
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
