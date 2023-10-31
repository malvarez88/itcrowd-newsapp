import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      //should have done it with item.title (if i have time i should CHANGE IT!)
      const publishedAt = state.items.findIndex(
        (item) => item.publishedAt === action.payload.publishedAt
      );
      if (publishedAt < 0) {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromFavorites: (state, action) => {
      const publishedAt = state.items.findIndex(
        (item) => item.publishedAt === action.payload.publishedAt
      );
      const newState = [...state.items];
      if (publishedAt >= 0) {
        newState.splice(publishedAt, 1);
      }
      state.items = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;

export default favoritesSlice.reducer;
