import { ReactComponent as SocVk } from "../../svg/socials/ico_vk.svg";
import { ReactComponent as SocTg } from "../../svg/socials/ico_tg.svg";
import { ReactComponent as SocInst } from "../../svg/socials/ico_inst.svg";
import { ReactComponent as SocTiktok } from "../../svg/socials/ico_tiktok.svg";

import "./index.css";

const Socials = (props) => {
  const { className = "" } = props;

  return (
    <>
      <ul className={`social-buttons ${className}`}>
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
    </>
  );
};

export default Socials;
