import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global/global.slice";
import authReducer from "./reducers/auth/auth.slice";
import { api } from "./apiSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
			global: globalReducer,
			[api.reducerPath]: api.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware),
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
