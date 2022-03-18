import "./logo.scss";

import logo from "./logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Chartmetric" />
      <p>Chartmetric</p>
    </div>
  );
};

export default Logo;
