"use client";

import { useContext } from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./Movies.module.css";
import { FilterContext } from "../BodyContextProvider";

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
  const filterData = useContext(FilterContext);
  
  return (
    <div className={styles.container}>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
      <MovieCard genre="Genre" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" title="Title"/>
    </div>
  );
};

export default Movies;
