import React from "react";
import icon_trash from "../../assets/icon_trash.svg";

const FavoriteItem = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite, index) => {
        return (
          <div key={index} className="favorites-item">
            <img src="" alt="Photo profile" />
            <p style={{ color: "#FFFFFF" }}>{favorite.name}</p>
            <img src={icon_trash} alt="Trash" />
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteItem;
