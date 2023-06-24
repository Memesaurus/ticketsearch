"use client";

import Filter from "./Filter/Filter";
import Movies from "./Movies/Movies";
import styles from "./Body.module.css";
import BodyContextProvider from "./BodyContextProvider";

const Body = () => {
  return (
    <BodyContextProvider>
      <div className={styles.container}>
        <Filter />
        <Movies />
      </div>
    </BodyContextProvider>
  );
};

export default Body;
