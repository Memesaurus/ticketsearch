"use client";

import { useCallback, useContext, useEffect, useMemo } from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./Movies.module.css";
import { FilterContext } from "../BodyContextProvider";
import { useGetMoviesByTheatreQuery } from "@/app/redux/services/movieApi";

export type Movie = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

const MovieList = () => {
  const { filmName, theatre, genre } = useContext(FilterContext);
  const { data, isLoading, isError } = useGetMoviesByTheatreQuery(theatre);

  const filteredData = useMemo<Movie[] | undefined>(
    () =>
      data?.filter((movie) => {
        if (filmName && !movie.title.toLowerCase().includes(filmName)) {
          return false;
        }

        if (genre && !(movie.genre === genre)) {
          return false;
        }

        return true;
      }),
    [filmName, genre, data]
  );

  if (isLoading) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  if (isError) {
    return <div className={styles.container}>Error fetching movies</div>;
  }

  return (
    <div className={styles.container}>
      {filteredData?.map(({ id, posterUrl, genre, title}) => (
        <MovieCard
          key={id}
          id={id}
          genre={genre}
          posterUrl={posterUrl}
          title={title}
        />
      ))}
    </div>
  );
};

export default MovieList;
