import { api } from "../../apiSlice";

const authApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({}),
});

export const {} = authApi;
export default authApi;
