import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites";

export default function generateStore() {
  const store = configureStore({
    reducer: favoritesReducer,
  });
  return store;
}
