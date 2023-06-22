import Filter from "./Filter/Filter";
import Movies from "./Movies/Movies";
import styles from './Body.module.css';
import BodyContextProvider from "./BodyContextProvider";

const Body = () => {
  return (
    <div className={styles.container}>
      <BodyContextProvider>
        <Filter />
        <Movies />
      </BodyContextProvider>
    </div>
  )
}

export default Body