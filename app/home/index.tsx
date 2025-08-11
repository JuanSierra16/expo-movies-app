import MainSlideShow from "@/presentation/hooks/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/hooks/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Carousel de imagenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-5"
        />

        {/* Mejor Calificadas */}
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Mejor Calificadas"
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Proximamente */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
        {/* Proximamente */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
        {/* Proximamente */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
