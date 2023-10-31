import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./src/features/favoritesSlice";
import newsReducer from "./src/features/NewsSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    news: newsReducer,
  },
});
