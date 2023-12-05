import { createSlice } from "@reduxjs/toolkit";
import { IGenres } from "../../types/genres.types";

const initialState: IGenres[] = [];

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {

    getAllGenres: (state, {payload: genres}) => {
        return genres;
    },
  },
});

export const {actions, reducer} = genresSlice