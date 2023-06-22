"use client"

import { useContext } from "react"
import MovieCard from "./MovieCard/MovieCard"
import styles from "./Movies.module.css"
import { FilterContext } from "../BodyContextProvider";

const Movies = () => {
  const filterData = useContext(FilterContext);

  return (
    <div className={styles.container}>
      {JSON.stringify(filterData)}
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default Movies