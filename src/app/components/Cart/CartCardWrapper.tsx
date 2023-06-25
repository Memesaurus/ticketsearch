import { selectMovie } from "@/app/redux/cart/selector";
import { useAppSelector } from "@/app/redux/store";
import MovieCard from "../Root/Movies/MovieCard/MovieCard";

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