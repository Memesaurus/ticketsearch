import Filter from "./Filter/Filter";
import Movies from "./Movies/Movies";
import styles from './Body.module.css';

const Body = () => {
  return (
    <div className={styles.container}>
        <Filter />
        <Movies />
    </div>
  )
}

export default Body