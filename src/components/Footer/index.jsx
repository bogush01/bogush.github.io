import { Link } from "react-router-dom";

import Socials from "../Socials";

import logoFooter from "../../img/logo_footer.png";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__policy">
        <li>
          <Link className="footer__policy-link" to="/">
            Политика конфиденциальности
          </Link>
        </li>
        <li>
          <Link className="footer__policy-link" to="/">
            Согласие на обработку конфидециальных данных
          </Link>
        </li>
      </ul>

      <div className="footer__logo-copyright">
        <img src={logoFooter} alt="" />
        <p className="footer__copyright">2024 GruboGovorya</p>
      </div>

      <Socials />
    </footer>
  );
};

export default Footer;
