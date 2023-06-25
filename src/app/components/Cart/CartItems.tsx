import { selectIds } from "@/app/redux/cart/selector";
import { useAppSelector } from "@/app/redux/store";
import CartCardWrapper from "./CartCardWrapper";
import styles from "./CartItems.module.css"

const CartItems = () => {
    const keys = useAppSelector((state) => selectIds(state));

    return (
      <div className={styles.container}>
        {keys.map((id) => (
          <CartCardWrapper key={id} id={id} />
        ))}
      </div>
    );
}

export default CartItems