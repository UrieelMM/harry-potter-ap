import { GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from "../types";
const data = {
  favorites: [],
};

export const favoritesReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
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

export const addFavorite = (data) => async (dispatch) => {
  const URL = "http://localhost:4000/favorites";
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.name, image: data.image }),
    });
    const result = await res.json();
    dispatch({
      type: ADD_FAVORITE,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavorite = (id) => async (dispatch) => {
  const URL = `http://localhost:4000/favorites/${id}`;
  try {
    const res = await fetch(URL, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_FAVORITE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
