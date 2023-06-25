"use client";
import Image from "next/image";
import useCount from "./useCount";
import { MovieData } from "./MovieCard";
import { usePathname } from "next/navigation";
import styles from "./MovieCardCounter.module.css";

type Props = {
  movie: MovieData;
  showModal?: () => void;
};

const MovieCardCounter = ({ movie, showModal }: Props) => {
  const { count, increment, decrement } = useCount(movie);
  const pathname = usePathname();

  const handleDecrement = () => {
    if (count === 1 && pathname === "/cart" && showModal) {
      showModal();
    } else {
      decrement();
    }
  };

  return (
    <div className={styles.counter}>
      <button onClick={handleDecrement} disabled={count === 0}>
        <Image src="/Minus.svg" width={20} height={20} alt="-" />
      </button>

      {count}

      <button onClick={increment} disabled={count >= 30}>
        <Image src="/Plus.svg" width={20} height={20} alt="+" />
      </button>
    </div>
  );
};

export default MovieCardCounter;
