import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const publishedAt = state.items.findIndex(
        (item) => item.publishedAt === action.payload.publishedAt
      );
      if (publishedAt < 0) {
        state.items = [...state.items, action.payload];
      }
      // else {
      //   console.warn("You have already added this to favorites");
      // }
    },
    removeFromFavorites: (state, action) => {
      const publishedAt = state.items.findIndex(
        (item) => item.publishedAt === action.payload.publishedAt
      );
      const newState = [...state.items];
      if (publishedAt >= 0) {
        newState.splice(publishedAt, 1);
      }
      // else {
      //   console.warn("You cant unfavorite this news");
      // }
      state.items = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;

export default favoritesSlice.reducer;
