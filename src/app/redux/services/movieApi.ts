import { Review } from "@/app/components/MoviePage/Review/Review";
import { Cinema } from "@/app/components/Root/Filter/Filter";
import { Movie } from "@/app/components/Root/Movies/MoviesList";
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const BASE_URL = "http://localhost:3001/api/"

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMoviesByTheatre: builder.query<Movie[], string | null>({
      query: (theatre) => (theatre ? `movies?cinemaId=${theatre}` : "movies"),
    }),
    getCinemas: builder.query<Cinema[], void>({ query: () => "cinemas" }),
    getMovieWithReviews: builder.query<[Movie, Review[]], string>({
      async queryFn(id, _queryApi, _extraOptions, baseQuery) {
        const movieQuery = baseQuery(`movie?movieId=${id}`);
        const reviewsQuery = baseQuery(`reviews?movieId=${id}`);
        const results = await Promise.all([movieQuery, reviewsQuery]);

        for (const result of results) {
          if (result.error) {
            return { error: result.error as FetchBaseQueryError };
          }
        }

        const array = results.map((result) => result.data) as [Movie, Review[]];
        return { data: array };
      },
    }),
  }),
});

export const {
  useGetMoviesByTheatreQuery,
  useGetCinemasQuery,
  useGetMovieWithReviewsQuery,
} = movieApi;
