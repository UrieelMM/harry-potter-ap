import { useState } from "react";

const useFavorites = () => {
  const [isShowingFavorites, setIsShowingFavorites] = useState(false);

  function toggleFavorites() {
    setIsShowingFavorites(!isShowingFavorites);
  }
  return {
    isShowingFavorites,
    toggleFavorites,
  };
};

export default useFavorites;
