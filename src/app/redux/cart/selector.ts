import { RootState } from "../store";
import { CartState } from "./cartSlice";

export const selectCartModule = (state: RootState): CartState => state.cart;

export const selectMovieCount = (state: RootState, id: string) =>
  selectCartModule(state).map[id]?.count || 0;

export const selectMovie = (state: RootState, id: string) => 
  selectCartModule(state).map[id].movie || null;

export const selectTotalCartSize = (state: RootState) => {
  const cart = selectCartModule(state);

  let sum = 0;
  for (const item in cart.map) {
    sum += cart.map[item].count;
  }

  return sum;
};

export const selectIds = (state: RootState) => {
  const cart = selectCartModule(state);

  return cart.keys;
}