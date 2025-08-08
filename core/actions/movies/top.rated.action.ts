import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBMoviesResponse>('/top_rated')

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies;
  } catch (error) {
    console.error("Error in topRatedMoviesAction:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}