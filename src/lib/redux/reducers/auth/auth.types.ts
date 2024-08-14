import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface AuthReducerType {
	accessToken: string;
}

export type AuthDispatch = ThunkDispatch<RootState, AuthReducerType, any>;
