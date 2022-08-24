import React from "react";
import save_fill from "../../assets/save_fill.svg";
import user_fill from "../../assets/user_fill.svg";

const Menu = () => {
  return (
    <div className="menu-container">
      <button className="menu-option menu-option--left">
        <p style={{ color: "#FFFFFF" }}>Favoritos</p>
        <img
          src={save_fill}
          alt="Icono favoritos"
          className="menu-option--icon"
        />
      </button>
      <button className="menu-option menu-option--right">
        <p>Agregar</p>
        <img
          src={user_fill}
          alt="Icono agregar"
          className="menu-option--icon"
        />
      </button>
    </div>
  );
};

export default Menu;
