import { useState } from "react";
import { FlatList, View } from "react-native";
import { fetchLatestData } from "./modules/api";
import { ContactItem } from "./modules/contact-item";
import { CONTACTS } from "./modules/data";
import type { Contact } from "./modules/types";

export default function RefreshableListScreen() {
  const [data, setData] = useState<Contact[]>(CONTACTS);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const latestData = await fetchLatestData();
      setData(latestData);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <FlatList<Contact>
        className="mt-5"
        data={data}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
        renderItem={({ item, index }) => <ContactItem item={item} index={index} />}
      />
    </View>
  );
}
