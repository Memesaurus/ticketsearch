import { createSlice } from "@reduxjs/toolkit";

type CartState = Record<string, number>;

const initialState: CartState = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, { payload }) => {
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },
        removeItem: (state, { payload }) => {
            const count = state[payload];

            if (!count) {
                return;
            }

            if (count === 1) {
                delete state[payload];
                return;
            }

            state[payload] = count - 1;
        },
        deleteItem: (state, { payload }) => {
            delete state[payload];
        },
        resetCart: () => initialState
    }
});