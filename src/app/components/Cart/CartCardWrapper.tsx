import MovieCard from "@/app/components/Body/Movies/MovieCard/MovieCard";
import { selectMovie } from "@/app/redux/cart/selector";
import { useAppSelector } from "@/app/redux/store";

type Props = {
    id: string;
}

const CartCardWrapper = ({ id }: Props) => {
    const { genre, posterUrl, title } = useAppSelector((state) => selectMovie(state, id));
  return (
    <MovieCard id={id} genre={genre} posterUrl={posterUrl} title={title} cancelButton/>
  )
}

export default CartCardWrapper