import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "../menu/menuType";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
	cart: Array<{ item: Menu; total: number; note: string }>;
}

const initialState: OrderState = {
	cart: [],
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Menu>) => {
			// check if already in cart
			const existingItem = state.cart.find(
				({ item }) => item.id === action.payload.id
			);

			// if true total +1, else add new item
			if (existingItem) {
				const idx = state.cart.indexOf(existingItem);
				state.cart[idx].total += 1;
			} else {
				state.cart.push({ item: action.payload, total: 1, note: "" });
			}
		},
	},
});

export const { addToCart } = orderSlice.actions;

export default orderSlice.reducer;
