import { createSlice } from "@reduxjs/toolkit";
import { IBookGet } from "../../types/book.types";

const initialState: IBookGet[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, { payload: book }) => {
      const isExist = state.some((b) => b.id === book.id);
      if (isExist) {
        return state.filter((b) => b.id !== book.id);
      } else {
        return [...state, book];
      }
    },
  },
});

export const { actions, reducer } = cartSlice;
