import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1661318381/proyectos-work/logo_trllec.png"
          alt="Logo Harry Potter"
        />
      </div>
      <div className="header-filter">
        <p>Selecciona tu filtro</p>
      </div>
    </div>
  );
};

export default Header;
