import { createSlice } from "@reduxjs/toolkit";
import { IAuthor } from "../../types/author.types";

const initialState: IAuthor[] = [];

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {

getAllAuthors: (_state, { payload: authors }) => {
  return authors;
}
  },
});

export const {actions, reducer} = authorsSlice