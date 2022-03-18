import "./header.scss";

import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo";
import Search from "./search";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="right-side">
        <Search />
        <FontAwesomeIcon className="header-icon" icon={faBullhorn} />
        <FontAwesomeIcon className="header-icon" icon={faBell} />
        <FontAwesomeIcon className="header-icon" icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
