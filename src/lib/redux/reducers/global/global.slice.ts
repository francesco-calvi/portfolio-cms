import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pokemon: "bulbasaur",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
