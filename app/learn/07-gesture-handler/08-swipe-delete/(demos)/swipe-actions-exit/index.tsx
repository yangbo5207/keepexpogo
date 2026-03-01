import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { INITIAL_ITEMS, type SwipeActionType, type SwipeDeleteItem } from "./constants";
import { SwipeActionsRow } from "./swipe-actions-row";

export default function SwipeActionsExitScreen() {
  const [items, setItems] = useState<SwipeDeleteItem[]>(INITIAL_ITEMS);
  const activeRowId = useSharedValue(-1);

  const handleAction = (id: string, action: SwipeActionType) => {
    if (action === "delete") {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }

    setItems((current) => {
      const index = current.findIndex((item) => item.id === id);
      if (index <= 0) {
        return current;
      }
      const next = [...current];
      const [target] = next.splice(index, 1);
      next.unshift(target);
      return next;
    });
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">
        Practical Swipe Delete
      </Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">多操作按钮 + 删除退场动画</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">
        左滑显示置顶/删除。删除会先滑出，再收缩淡出，最后移除。
      </Text>

      <ScrollView className="mt-5" contentContainerStyle={{ paddingBottom: 20 }}>
        {items.map((item, index) => (
          <SwipeActionsRow key={item.id} rowId={index} activeRowId={activeRowId} item={item} onAction={handleAction} />
        ))}
      </ScrollView>
    </View>
  );
}
