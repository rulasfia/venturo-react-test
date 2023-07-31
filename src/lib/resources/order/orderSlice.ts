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
		removeFromCart: (state, action: PayloadAction<Menu>) => {
			// check if already in cart
			const existingItem = state.cart.find(
				({ item }) => item.id === action.payload.id
			);

			// if true and total > 1, total -1. else remove item
			if (existingItem) {
				const idx = state.cart.indexOf(existingItem);

				if (existingItem.total > 1) {
					state.cart[idx].total -= 1;
				} else {
					state.cart.splice(idx, 1);
				}
			}
		},
		updateNoteByMenuID: (
			state,
			action: PayloadAction<{ id: number; note: string }>
		) => {
			// check if already in cart
			const existingItem = state.cart.find(
				({ item }) => item.id === action.payload.id
			);

			// if true, update note
			if (existingItem) {
				const idx = state.cart.indexOf(existingItem);
				state.cart[idx].note = action.payload.note;
			}
		},
	},
});

export const { addToCart, removeFromCart, updateNoteByMenuID } =
	orderSlice.actions;

export default orderSlice.reducer;
