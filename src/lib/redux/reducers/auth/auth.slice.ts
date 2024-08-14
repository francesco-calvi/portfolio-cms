import { createSlice } from "@reduxjs/toolkit";
import { setAuthenticationTokenAction } from "./auth.actions";
import { AuthReducerType } from "./auth.types";

const initialState: AuthReducerType = { accessToken: "" };

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticationToken: setAuthenticationTokenAction,
  },
  extraReducers: (builder) => {},
});

export const { setAuthenticationToken } = authReducer.actions;
export default authReducer.reducer;
