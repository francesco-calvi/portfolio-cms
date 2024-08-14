import { PayloadAction } from "@reduxjs/toolkit";
import { AuthReducerType } from "./auth.types";

export const setAuthenticationTokenAction = (
  state: AuthReducerType,
  action: PayloadAction<string>
) => {
  state.accessToken = action.payload;
};
