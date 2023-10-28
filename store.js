import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./src/features/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
