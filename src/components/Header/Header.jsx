import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="Logo Harry Potter" />
      </div>
      <div className="header-filter">
        <p>Selecciona tu filtro</p>
      </div>
    </div>
  );
};

export default Header;
