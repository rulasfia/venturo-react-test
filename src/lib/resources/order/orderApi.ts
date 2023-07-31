import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { OrderBody, OrderResponse } from "./orderTypes";

export const orderApi = createApi({
	reducerPath: "orderApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://tes-mobile.landa.id/api/" }),
	endpoints: (builder) => ({
		createOrder: builder.mutation<OrderResponse, OrderBody>({
			query: (body) => ({
				url: `/order`,
				method: "POST",
				body: body,
			}),
		}),
	}),
});

export const { useCreateOrderMutation } = orderApi;
