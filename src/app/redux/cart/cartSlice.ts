import { MovieData } from "@/app/components/Body/Movies/MovieCard/MovieCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MovieDataWithCount = { count: number; movie: MovieData };
export type CartState = Record<string, MovieDataWithCount>;

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<MovieData>) => {
      const item: MovieDataWithCount = state[payload.id] || {
        count: 0,
        movie: payload,
      };

      item.count++;

      state[payload.id] = item;
    },
    removeItem: (state, { payload }: PayloadAction<MovieData>) => {
      const count = state[payload.id].count;

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload.id];
        return;
      }

      state[payload.id].count--;
    },
    resetItem: (state, { payload }: PayloadAction<string>) => {
      delete state[payload];
    },
    resetCart: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
