import { RootState } from "../store";

export const selectCartModule = (state: RootState) => state.cart;

export const selectItemCount = (state: RootState, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectTotalCartSize = (state: RootState) => {
  const cart = selectCartModule(state);

  let sum = 0;
  for (const item in cart) {
    sum += cart[item];
  }

  return sum;
};
