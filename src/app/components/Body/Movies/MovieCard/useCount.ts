import { cartActions } from "@/app/redux/cart/cartSlice";
import { selectMovieCount } from "@/app/redux/cart/selector";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { useCallback } from "react";
import { MovieData } from "./MovieCard";

export const useCount = (movie: MovieData) => {
  const count = useAppSelector((state) => selectMovieCount(state, movie.id));
  const dispatch = useAppDispatch();

  const decrement = useCallback(() => dispatch(cartActions.removeItem(movie)), [dispatch, movie]);
  const increment = useCallback(() => dispatch(cartActions.addItem(movie)), [dispatch, movie]);

  return { count, decrement, increment };
};

export default useCount;
