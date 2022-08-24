import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import save_fill from "../../assets/save_fill.svg";
import user_fill from "../../assets/user_fill.svg";

const Menu = () => {
  //useModal
  const { isShowing, toggle } = useModal();

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
      <button onClick={toggle} className="menu-option menu-option--right">
        <p>Agregar</p>
        <img
          src={user_fill}
          alt="Icono agregar"
          className="menu-option--icon"
        />
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Menu;
