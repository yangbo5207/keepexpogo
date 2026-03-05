import { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { fetchLatestData, fetchNextPage } from "./modules/api";
import { ContactItem } from "./modules/contact-item";
import { BASE_CONTACTS } from "./modules/data";
import type { Contact } from "./modules/types";

export default function RefreshAndLoadMoreScreen() {
  const [data, setData] = useState<Contact[]>(BASE_CONTACTS);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const latestData = await fetchLatestData();
      setData(latestData);
      setPage(1);
      setHasMore(true);
    } finally {
      setRefreshing(false);
    }
  };

  const handleLoadMore = async () => {
    if (refreshing || loadingMore || !hasMore) {
      return;
    }

    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const more = await fetchNextPage(nextPage);
      if (more.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...more]);
        setPage(nextPage);
      }
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <View className="flex-1 bg-cream-50 py-8 dark:bg-night-800">
      <FlatList<Contact>
        className="mt-5 px-6"
        data={data}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.25}
        contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
        renderItem={({ item, index }) => <ContactItem item={item} index={index} />}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator style={{ padding: 20 }} />
          ) : (
            <Text className="py-5 text-center text-sm text-cream-500 dark:text-night-400">{hasMore ? "上拉继续加载更多" : "没有更多了"}</Text>
          )
        }
      />
    </View>
  );
}
