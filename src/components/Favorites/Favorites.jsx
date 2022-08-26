import React from "react";
import icon_trash from "../../assets/icon_trash.svg";

const Favorites = ({ isShowingFavorites, favorites }) =>
  isShowingFavorites ? (
    <>
      <div className="favorites-container">
        {favorites.map((favorite, index) => {
          return (
            <div className="favorites-item">
              <img src="" alt="" />
              <p>{favorite.name}</p>
              <span>Icon</span>
            </div>
          );
        })}
      </div>
    </>
  ) : null;

export default Favorites;
