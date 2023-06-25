import { selectTotalCartSize } from "@/app/redux/cart/selector";
import { useAppSelector } from "@/app/redux/store";
import styles from "./TotalItems.module.css";

const TotalItems = () => {
  const count = useAppSelector((state) => selectTotalCartSize(state));

  return (
    <div className={styles.ticketCount}>
      <div>Итого билетов:</div>
      <div>{count > 0 ? count : "Нет билетов!"}</div>
    </div>
  );
};

export default TotalItems;
