import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { Tag } from "./tag";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		credentials: "include",
		baseUrl: SERVER_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.accessToken;

			if (token) {
				headers.set("Authorization", `Token ${token}`);
			}

			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: [Tag.AuthProfile, Tag.Profile, Tag.Recipe, Tag.User],
});
