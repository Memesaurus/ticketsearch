import { cartActions } from "@/app/redux/cart/cartSlice";
import { selectItemCount } from "@/app/redux/cart/selector";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { useCallback } from "react";

export const useCount = (id: string) => {
  const count = useAppSelector((state) => selectItemCount(state, id));
  const dispatch = useAppDispatch();

  const decrement = useCallback(() => dispatch(cartActions.removeItem(id)), [dispatch, id]);
  const increment = useCallback(() => dispatch(cartActions.addItem(id)), [dispatch, id]);

  return { count, decrement, increment };
};

export default useCount;
