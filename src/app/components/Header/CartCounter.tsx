"use client";

import React from "react";
import styles from "./Header.module.css";
import { useAppSelector } from "@/app/redux/store";
import { selectTotalCartSize } from "@/app/redux/cart/selector";

const CartCounter = () => {
  const counter = useAppSelector((state) => selectTotalCartSize(state));
  return Boolean(counter) && <span className={styles.counter}>{counter}</span>;
};

export default CartCounter;
