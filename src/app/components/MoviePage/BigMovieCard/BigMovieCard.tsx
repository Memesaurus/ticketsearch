"use client";

import styles from "./BigMovieCard.module.css";
import Image from "next/image";
import { useRUGenre } from "@/app/components/useRUGenre";
import { Movie } from "../../Root/Movies/MoviesList";
import MovieCardCounter from "../../Root/Movies/MovieCard/MovieCardCounter";

type Props = {
  movie: Movie
}

const BigMovieCard = ({ movie }: Props) => {
  const {description, director, genre, posterUrl, rating, releaseYear, title} = movie;
  const ruGenre = useRUGenre(genre);

  return (
    <div className={styles.container}>
      <div className={styles.movie}>
        <Image src={posterUrl} width={400} height={500} alt={title} />
        <div className={styles.movieInfo}>
          <div className={styles.header}>
            <h1>{title}</h1>
            <MovieCardCounter movie={movie} />
          </div>
          <div className={styles.about}>
            <span>
              <b>Жанр:</b> {ruGenre}
            </span>
            <span>
              <b>Год выпуска:</b> {releaseYear}
            </span>
            <span>
              <b>Рейтинг:</b> {rating}
            </span>
            <span>
              <b>Режиссер:</b> {director}
            </span>
          </div>

          <div className={styles.description}>
            <h3>Описание</h3>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}


export default BigMovieCard;