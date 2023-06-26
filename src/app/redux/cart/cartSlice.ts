import { MovieData } from "@/app/components/Root/Movies/MovieCard/MovieCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MovieDataWithCount = { count: number; movie: Omit<MovieData, 'id'> };
export type CartState = {
  keys: string[];
  map: Record<string, MovieDataWithCount>;
};

//Массив тут для того, чтобы в оттуда в корзину брать стейт. Если брать мапу то будет ререндер при любом клике
const initialState: CartState = {keys: [], map: {}};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<MovieData>) => {
      const item: MovieDataWithCount = state.map[payload.id] || {
        count: 0,
        movie: {
          genre: payload.genre,
          posterUrl: payload.posterUrl,
          title: payload.title,
        },
      };

      item.count++;

      if (!state.keys.includes(payload.id)) {
        state.keys.push(payload.id);
      }

      state.map[payload.id] = item;
    },
    removeItem: (state, { payload }: PayloadAction<MovieData>) => {
      const count = state.map[payload.id].count;

      if (!count) {
        return;
      }

      if (count === 1) {
        const index = state.keys.indexOf(payload.id);
        if (index !== -1) {
          state.keys.splice(index, 1);
        }
        delete state.map[payload.id];
        return;
      }

      state.map[payload.id].count--;
    },
    resetItem: (state, { payload }: PayloadAction<string>) => {
      const index = state.keys.indexOf(payload);
      if (index !== -1) {
        state.keys.splice(index, 1);
      }

      delete state.map[payload];
    },
    resetCart: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
