import React, { useEffect } from "react";
import Modal from "../Modal";
import Favorites from "../Favorites";
import useModal from "../../hooks/useModal";
import useFavorites from "../../hooks/useFavorites";
import save_fill from "../../assets/save_fill.svg";
import user_fill from "../../assets/user_fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/favorites";

const Menu = () => {
  const { isShowing, toggle } = useModal();
  const { isShowingFavorites, toggleFavorites } = useFavorites();
  //redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [isShowingFavorites]);
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="menu-container">
      <button
        onClick={toggleFavorites}
        className="menu-option menu-option--left"
      >
        <p style={{ color: "#FFFFFF" }}>Favoritos</p>
        <img
          src={save_fill}
          alt="Icono favoritos"
          className="menu-option--icon"
        />
      </button>
      <Favorites
        isShowingFavorites={isShowingFavorites}
        hide={toggleFavorites}
        favorites={favorites}
      />
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
