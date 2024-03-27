import { Link } from "react-router-dom";

import "./index.css";

const CatalogSideMenu = () => {
  return (
    <ul className="catalog-side-menu">
      <li>
        <Link className="catalog-side-menu-link" to="/">
          Плащи
        </Link>
      </li>
      <li>
        <Link className="catalog-side-menu-link" to="/">
          Куртки
        </Link>
      </li>
      <li className="catalog-side-menu-active">Кофты</li>
      <li>
        <Link className="catalog-side-menu-link" to="/">
          Комбинезоны
        </Link>
      </li>
      <li>
        <Link className="catalog-side-menu-link" to="/">
          Кепки
        </Link>
      </li>
      <li>
        <Link className="catalog-side-menu-link" to="/">
          Сумки
        </Link>
      </li>
    </ul>
  );
};

export default CatalogSideMenu;
