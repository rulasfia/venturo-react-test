import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { VoucherResponse } from "./voucherTypes";

export const voucherApi = createApi({
	reducerPath: "voucherApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://tes-mobile.landa.id/api/" }),
	endpoints: (builder) => ({
		getVoucherByCode: builder.query<VoucherResponse, string>({
			query: (voucher) => `/vouchers?kode=${voucher}`,
		}),
	}),
});

export const { useGetVoucherByCodeQuery } = voucherApi;
