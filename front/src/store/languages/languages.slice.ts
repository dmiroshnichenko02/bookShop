/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ILang } from "../../types/lang.types";

const initialState: ILang[] = [];

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {

    getAllLanguages: (_state, {payload: languages}) => {
        return languages;
    },
  },
});

export const {actions, reducer} = languagesSlice