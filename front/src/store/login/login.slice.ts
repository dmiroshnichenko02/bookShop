import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { user: "", token: "",id: 0 };

interface Ilogine { 
  user: string;
  token: string;
  id: number
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<Ilogine>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
  },
});

export const { actions, reducer } = loginSlice;
