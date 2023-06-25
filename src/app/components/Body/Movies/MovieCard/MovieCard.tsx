"use client"

import Image from "next/image";
import styles from "./MovieCard.module.css";
import MovieCardCounter from "./MovieCardCounter";
import { Movie } from "../MoviesList";
import { useRUGenre } from "@/app/components/useRUGenre";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CardDeleteModal from "./Modal/CardDeleteModal";
import { useAppDispatch } from "@/app/redux/store";
import { cartActions } from "@/app/redux/cart/cartSlice";

export type MovieData = Pick<Movie, "genre" | "title" | "posterUrl" | "id">;
type Props = {
  cancelButton?: boolean;
  movie: MovieData;
};

const MovieCard = ({ cancelButton, movie }: Props) => {
  const { genre, id, posterUrl, title } = movie;
  const ruGenre = useRUGenre(genre);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [isModal, setModal] = useState(false);

  const showModal = () => {
    if (pathname !== "/cart") {
      return;
    }

    setModal(true);
  }
  
  const closeModal = (modalResponse: boolean) => {
    if (modalResponse) {
      dispatch(cartActions.resetItem(id));
    }

    setModal(false);
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={posterUrl}
        width={100}
        height={120}
        alt={title}
      />
      <div className={styles.title}>
        <Link href={`/film/${id}`}>{title}</Link>
        <span className={styles.genre}>{ruGenre}</span>
      </div>

      <MovieCardCounter
        movie={movie}
        showModal={showModal}
      />

      {cancelButton && (
        <Image
          onClick={showModal}
          alt="X"
          src="/Cross.svg"
          width={20}
          height={20}
        />
      )}

      {isModal && <CardDeleteModal handleClose={closeModal} />}
    </div>
  );
};

export default MovieCard;
