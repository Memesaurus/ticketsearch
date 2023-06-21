import MovieCard from "./MovieCard/MovieCard"
import styles from "./Movies.module.css"

const Movies = () => {
  return (
    <div className={styles.container}>
      <MovieCard />
    </div>
  )
}

export default Movies