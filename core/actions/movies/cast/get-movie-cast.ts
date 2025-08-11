import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/cast.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async(movieId: number | string): Promise<Cast[]> => {
  try {
        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

        return data.cast.map(castMember => CastMapper.fromMovieDBCastToEntity(castMember));
      } catch (error) {
        console.error("Error in nowPlayingAction:", error);
        throw error; // Re-throw the error for further handling if needed
      }
}