import Image from "next/image";
import styles from "./Header.module.css";
import AdaptiveLink from "../AdaptiveLink";

const Header = () => {
  return (
    <div className={styles.header}>
      <AdaptiveLink className={styles.text} to="/">
        Билетопоиск
      </AdaptiveLink>

      <div className={styles.cart}>
        <span className={styles.counter}>30</span>
        <AdaptiveLink to="/cart">
          <Image src="Basket.svg" width={28} height={25} alt="Корзина" />
        </AdaptiveLink>
      </div>
    </div>
  );
};

export default Header;
