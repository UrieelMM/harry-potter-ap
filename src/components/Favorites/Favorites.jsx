import React from "react";
import FavoriteItem from "./FavoriteItem";

const Favorites = ({ isShowingFavorites, favorites }) =>
  isShowingFavorites ? (
    <>
      <div className="favorites-container">
        <FavoriteItem favorites={favorites} />
      </div>
    </>
  ) : null;

export default Favorites;
