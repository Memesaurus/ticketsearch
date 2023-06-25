import BodyContextProvider from "./components/Body/BodyContextProvider";
import Filter from "./components/Body/Filter/Filter";
import MovieList from "./components/Body/Movies/MoviesList";
import styles from './page.module.css'

export default function Home() {
  return (
    <BodyContextProvider>
    <div className={styles.container}>
      <Filter />
      <MovieList />
    </div>
  </BodyContextProvider>
  )
}