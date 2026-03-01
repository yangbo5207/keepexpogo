import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { INITIAL_ITEMS, type SwipeDeleteItem } from "./constants";
import { SwipeDeleteRow } from "./swipe-delete-row";

export default function SwipeDeleteListScreen() {
  const [items, setItems] = useState<SwipeDeleteItem[]>(INITIAL_ITEMS);
  const activeRowId = useSharedValue(-1);

  const handleDelete = (id: string) => {
    activeRowId.value = -1;
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Practical Swipe Delete</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">侧滑删除列表项</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">左滑露出删除按钮。超过阈值吸附展开，否则回弹。</Text>

      <ScrollView className="mt-5" contentContainerStyle={{ gap: 10, paddingBottom: 20 }}>
        {items.map((item, index) => (
          <SwipeDeleteRow key={item.id} rowId={index} activeRowId={activeRowId} item={item} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </View>
  );
}
