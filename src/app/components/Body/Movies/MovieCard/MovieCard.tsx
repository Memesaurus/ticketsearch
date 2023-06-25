import Image from "next/image";
import styles from "./MovieCard.module.css";
import MovieCardCounter from "./MovieCardCounter";
import { Movie } from "../Movies";
import { Suspense } from "react";

type Props = Pick<Movie, "genre" | "title" | "posterUrl">;

const MovieCard = ({ genre, title, posterUrl }: Props) => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<>Loading...</>}>
        <Image
          className={styles.image}
          src={posterUrl}
          width={100}
          height={120}
          alt={title}
        />
        <div className={styles.title}>
          <span> {title} </span>
          <span className={styles.genre}>{genre}</span>
        </div>

        <MovieCardCounter id="123" className={styles.counter} />
      </Suspense>
    </div>
  );
};

export default MovieCard;
