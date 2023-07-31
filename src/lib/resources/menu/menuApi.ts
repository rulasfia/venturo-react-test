import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MenuResponse } from "./menuType";

export const menuApi = createApi({
	reducerPath: "menuApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://tes-mobile.landa.id/api/" }),
	endpoints: (builder) => ({
		getAllMenu: builder.query<MenuResponse, undefined>({
			query: () => `/menus`,
		}),
	}),
});

export const { useGetAllMenuQuery } = menuApi;
