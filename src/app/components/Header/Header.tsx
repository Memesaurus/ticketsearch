"use client"

import Image from "next/image";
import styles from "./Header.module.css";
import AdaptiveLink from "../AdaptiveLink";
import CartCounter from "./CartCounter";


const Header = () => {
  return (
    <div className={styles.header}>
      <AdaptiveLink className={styles.text} to="/">
        Билетопоиск
      </AdaptiveLink>

      <div className={styles.cart}>
        <CartCounter />
        <AdaptiveLink to="/cart">
          <Image src="Basket.svg" width={32} height={32} alt="Корзина" />
        </AdaptiveLink>
      </div>
    </div>
  );
};

export default Header;
