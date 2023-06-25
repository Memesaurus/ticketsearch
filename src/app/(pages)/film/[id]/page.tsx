"use client";

import BigMovieCard from "@/app/components/Root/Movies/MovieCard/BigMovieCard/BigMovieCard";
import styles from "./page.module.css";
import { useGetMovieWithReviewsQuery } from "@/app/redux/services/movieApi";
import Review from "@/app/components/Root/Movies/Review/Review";


type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const { data, isError, isLoading } = useGetMovieWithReviewsQuery(params.id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!data || isError) {
    return <div>{"Что-то пошло не так :("}</div>;
  }

  const [movie, reviews] = data;

  return (
    <div className={styles.container}>
      <BigMovieCard movie={movie} />
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
