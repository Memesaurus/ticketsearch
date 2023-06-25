import { Store, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "./services/movieApi";

const store: Store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
