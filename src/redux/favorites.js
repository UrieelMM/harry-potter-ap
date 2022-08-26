const data = {
  favorites: [],
};

const GET_FAVORITES = "GET_FAVORITES";

export const favoritesReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const getFavorites = () => async (dispatch) => {
  const URL = "http://localhost:4000/favorites";
  try {
    const res = await fetch(URL);
    const result = await res.json();
    dispatch({
      type: GET_FAVORITES,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
