import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.text}> Билетопоиск </span>
      <Image src="Basket.svg" width={28} height={25} alt="Корзина" />
    </div>
  );
};

export default Header;
