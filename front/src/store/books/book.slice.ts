import { createSlice } from "@reduxjs/toolkit";
import { IBookGet } from "../../types/book.types";

const initialState: IBookGet[] = [];

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {

    getAllBooks: (state, {payload: books}) => {
      return books;
    },
  },
});

export const {actions, reducer} = bookSlice