"use client";

import styles from "./page.module.css";
import { useAppSelector } from "@/app/redux/store";
import { selectMovies } from "@/app/redux/cart/selector";
import MovieCard from "@/app/components/Body/Movies/MovieCard/MovieCard";


export default function Page() {
  const movies = useAppSelector((state) => selectMovies(state));

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} cancelButton />
      ))}
    </div>
  );
}
