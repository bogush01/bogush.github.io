import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">q</Link>
        <nav>
          <ul>
            <li>Главная</li>
            <li>Коллекция</li>
            <li>O нас</li>
            <li>Контакты</li>
            <li>Корзина</li>
          </ul>
        </nav>
        <div>
          <a href="#">1</a>
          <a href="#">1</a>
          <a href="#">1</a>
          <a href="#">1</a>
        </div>
      </div>
      <ul>
        <li>Девушкам</li>
        <li>Мужчинам</li>
        <li>Унисекс</li>
      </ul>
    </header>
  );
};

export default Header;
