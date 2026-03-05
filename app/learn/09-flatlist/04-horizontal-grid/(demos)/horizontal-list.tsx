import { FlatList, Image, Text, View } from "react-native";

interface Card {
  id: string;
  title: string;
  image: string;
}

const cards: Card[] = [
  { id: "1", title: "城市夜景", image: "https://picsum.photos/id/1011/640/360" },
  { id: "2", title: "湖边清晨", image: "https://picsum.photos/id/1015/640/360" },
  { id: "3", title: "山脊日落", image: "https://picsum.photos/id/1002/640/360" },
  { id: "4", title: "林间小路", image: "https://picsum.photos/id/103/640/360" },
  { id: "5", title: "海岸风光", image: "https://picsum.photos/id/1056/640/360" },
];

export default function HorizontalCardsScreen() {
  return (
    <View className="flex-1 bg-cream-50 py-8 dark:bg-night-800">
      <FlatList<Card>
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, alignItems: "flex-start" }}
        ItemSeparatorComponent={() => <View className="w-3" />}
        renderItem={({ item }) => (
          <View
            className="w-40 self-start overflow-hidden rounded-xs border border-cream-200 bg-cream-50 dark:border-night-600 dark:bg-night-700"
            style={{
              shadowColor: "#74644a",
              shadowOpacity: 0.12,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 3 },
              elevation: 3,
            }}
          >
            <Image source={{ uri: item.image }} className="h-24 w-40" />
            <Text className="p-2 text-sm font-medium text-cream-900 dark:text-night-100">{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
