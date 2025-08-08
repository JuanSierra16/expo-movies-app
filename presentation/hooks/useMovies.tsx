import { nowPlayingAction } from "@/core/actions/movies/now.playing.action";
import { popularMoviesAction } from "@/core/actions/movies/pupular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top.rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 24, // 24 hours
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "pupular"],
    queryFn: () => popularMoviesAction(),
    staleTime: 1000 * 60 * 24, // 24 hours
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: () => topRatedMoviesAction(),
    staleTime: 1000 * 60 * 24, // 24 hours
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMoviesAction(),
    staleTime: 1000 * 60 * 24, // 24 hours
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
