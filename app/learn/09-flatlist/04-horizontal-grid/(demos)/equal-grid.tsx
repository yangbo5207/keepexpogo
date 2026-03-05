import { Dimensions, FlatList, Image, View } from "react-native";

const NUM_COLUMNS = 3;
const SPACING = 4;
const screenWidth = Dimensions.get("window").width;
const horizontalPadding = 12;
const itemWidth = (screenWidth - horizontalPadding * 2 - SPACING * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

interface Photo {
  id: string;
  uri: string;
}

const photos: Photo[] = [
  { id: "1", uri: "https://picsum.photos/id/10/600/600" },
  { id: "2", uri: "https://picsum.photos/id/20/600/600" },
  { id: "3", uri: "https://picsum.photos/id/30/600/600" },
  { id: "4", uri: "https://picsum.photos/id/40/600/600" },
  { id: "5", uri: "https://picsum.photos/id/50/600/600" },
  { id: "6", uri: "https://picsum.photos/id/60/600/600" },
  { id: "7", uri: "https://picsum.photos/id/70/600/600" },
  { id: "8", uri: "https://picsum.photos/id/80/600/600" },
  { id: "9", uri: "https://picsum.photos/id/90/600/600" },
  { id: "10", uri: "https://picsum.photos/id/100/600/600" },
  { id: "11", uri: "https://picsum.photos/id/110/600/600" },
  { id: "12", uri: "https://picsum.photos/id/120/600/600" },
];

export default function PhotoGridScreen() {
  return (
    <View className="flex-1 bg-cream-50 px-3 py-4 dark:bg-night-800">
      <FlatList<Photo>
        data={photos}
        numColumns={NUM_COLUMNS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: SPACING }}
        columnWrapperStyle={{ gap: SPACING }}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth, marginBottom: SPACING }}>
            <Image
              source={{ uri: item.uri }}
              style={{ width: itemWidth, height: itemWidth }}
              className="rounded-xs"
            />
          </View>
        )}
      />
    </View>
  );
}
