import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBMoviesResponse>('/upcoming')

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies;
  } catch (error) {
    console.error("Error in upcomingMoviesAction:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}