import { createSlice } from "@reduxjs/toolkit";
import { IFormat } from "../../types/format.types";

const initialState: IFormat[] = [];

export const formatSlice = createSlice({
  name: "formats",
  initialState,
  reducers: {

    getAllFormats: (_state, {payload: formats}) => {
        return formats;
    },
  },
});

export const {actions, reducer} = formatSlice