import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../types/book.types";

const initialState: IBook[] = [];

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {

    getAllBooks: (state, {payload: books}) => {
        state.push(books);
    },
  },
});

export const {actions, reducer} = bookSlice