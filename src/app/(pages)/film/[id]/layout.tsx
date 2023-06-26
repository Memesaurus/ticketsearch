import { Movie } from "@/app/components/Root/Movies/MoviesList";
import { BASE_URL } from "@/app/redux/services/movieApi";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
  params: { id: string };
};

// Если бы это был реальный проект мы бы сделали ручку для метадаты?
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const movie: Movie = await fetch(`${BASE_URL}/movie?movieId=${params.id}`)
    .then((res) => res.json())
    .catch((_) => {
      return { title: "Ошибка" };
    });

  return {
    title: `${movie.title} - Билетопоиск`,
  };
};

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
