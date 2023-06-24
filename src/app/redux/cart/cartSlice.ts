import { createSlice } from "@reduxjs/toolkit";

type CartState = Record<string, number>;

const initialState: CartState = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

    }
});