import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
	order: string[];
}

const initialState: OrderState = {
	order: [],
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
});

// export const { increment, decrement, incrementByAmount } = orderSlice.actions;

export default orderSlice.reducer;
