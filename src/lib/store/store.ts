import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../resources/order/orderSlice";
import { menuApi } from "../resources/menu/menuApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
	reducer: {
		order: orderReducer,
		[menuApi.reducerPath]: menuApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(menuApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
