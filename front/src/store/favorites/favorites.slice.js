import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: book }) => {
      const isExist = state.some((b) => b.id === book.id);
      if (isExist) {
        state = state.filter((b) => b.id !== book.id);
      } else {
        state.push(book);
      }
    },
  },
});

export const {actions, reducer:unknown} = favoritesSlice