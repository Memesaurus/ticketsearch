import { createSlice } from "@reduxjs/toolkit";

export type CartState = Record<string, number>;

const initialState: CartState = {};

const cartSlice = createSlice({
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
        resetItem: (state, { payload }) => {
            delete state[payload];
        },
        resetCart: () => initialState
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;