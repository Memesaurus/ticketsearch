"use client";

import TotalItems from "@/app/components/Cart/TotalItems";
import CartItems from "../../components/Cart/CartItems";

export default function Page() {
  return (
    <>
      <CartItems />
      <TotalItems />
    </>
  );
}
