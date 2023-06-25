import { Movie } from "@/app/components/Body/Movies/Movies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMoviesByTheatre: builder.query<Movie[], string | null>({
      query: (theatre) =>
        theatre !== null ? `movies?cinemaId=${theatre}` : "movies",
    }),
  }),
});

export const { useGetMoviesByTheatreQuery } = movieApi;
