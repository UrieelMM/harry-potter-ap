import React from "react";

const Favorites = ({ isShowingFavorites, hide }) =>
  isShowingFavorites ? (
    <>
      <div className="favorites-container">
        <div className="favorites-item">
          <img src="" alt="" />
          <p>Luna Lovegood</p>
          <span>Icon</span>
        </div>
      </div>
    </>
  ) : null;

export default Favorites;
