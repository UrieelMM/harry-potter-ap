import React from "react";
import icon_trash from "../../assets/icon_trash.svg";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../redux/favorites";

const FavoriteItem = ({ favorites }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {favorites.map((favorite, index) => {
        return (
          <div key={index} className="favorites-item">
            <img
              className="favorites-item--photo"
              src={
                favorite.image
                  ? favorite.image
                  : "https://res.cloudinary.com/dz5tntwl1/image/upload/v1661364748/proyectos-work/not-image_b6zgzm.webp"
              }
              alt={favorite.name}
            />
            <p>{favorite.name}</p>
            <button onClick={() => dispatch(deleteFavorite(favorite.id))}>
              <img
                className="favorites-item--icon"
                src={icon_trash}
                alt="Trash"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteItem;
