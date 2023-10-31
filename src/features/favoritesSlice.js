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
        (item) => item.id === action.payload.id
      );
      if (publishedAt < 0) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      const id = state.items.findIndex((item) => item.id === action.payload.id);
      const newState = [...state.items];
      if (id >= 0) {
        newState.splice(id, 1);
      }
      state.items = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;

export default favoritesSlice.reducer;
