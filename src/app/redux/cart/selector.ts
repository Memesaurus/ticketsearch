import { RootState } from "../store";
import { CartState } from "./cartSlice";

export const selectCartModule = (state: RootState): CartState => state.cart;

export const selectMovieCount = (state: RootState, id: string) =>
  selectCartModule(state)[id]?.count || 0;

export const selectTotalCartSize = (state: RootState) => {
  const cart = selectCartModule(state);

  let sum = 0;
  for (const item in cart) {
    sum += cart[item].count;
  }

  return sum;
};

export const selectMovies = (state: RootState) => {
  const cart = selectCartModule(state);

  return Object.values(cart).map((data) => data.movie);
}