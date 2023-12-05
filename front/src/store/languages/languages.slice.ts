import { createSlice } from "@reduxjs/toolkit";
import { ILang } from "../../types/lang.types";

const initialState: ILang[] = [];

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {

    getAllLanguages: (state, {payload: languages}) => {
        return languages;
    },
  },
});

export const {actions, reducer} = languagesSlice