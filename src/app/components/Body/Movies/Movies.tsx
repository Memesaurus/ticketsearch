"use client";

import { useContext, useEffect } from "react";
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

const Movies = () => {
  const {filmName, theatre, genre} = useContext(FilterContext);
  
  const { data, isLoading, isError } = useGetMoviesByTheatreQuery(theatre);

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>
  }

  if (isError) {
    return <div className={styles.container}>Error fetching movies</div>
  }

  console.log(data);
  
  return (
    <div className={styles.container}>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
    </div>
  );
};

export default Movies;
