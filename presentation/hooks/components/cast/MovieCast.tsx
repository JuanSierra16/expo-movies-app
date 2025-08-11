import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  actors: Cast[];
}
const MovieCast = ({ actors }: Props) => {
  return (
    <View className="mt-5 mb-52">
      <Text className="font-bold text-2xl px-5">Actores</Text>
      <FlatList
        horizontal
        data={actors}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
export default MovieCast;
