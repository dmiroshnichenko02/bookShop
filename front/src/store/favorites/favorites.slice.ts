import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../types/book.types";

const initialState: IBook[] = [];

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

export const {actions, reducer} = favoritesSlice