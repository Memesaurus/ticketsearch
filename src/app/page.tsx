import RootContextProvider from './components/Root/RootContextProvider'
import Filter from './components/Root/Filter/Filter'
import MovieList from './components/Root/Movies/MoviesList'
import styles from './page.module.css'

export default function Home() {
  return (
    <RootContextProvider>
    <div className={styles.container}>
      <Filter />
      <MovieList />
    </div>
  </RootContextProvider>
  )
}