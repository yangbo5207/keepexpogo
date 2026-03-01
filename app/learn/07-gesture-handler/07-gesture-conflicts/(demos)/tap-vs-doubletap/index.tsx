import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { FeedCard, type ConflictCard } from "./FeedCard";

const CARDS: ConflictCard[] = [
  { id: "c1", title: "Sunset Walk", subtitle: "单击选中 / 双击点赞" },
  { id: "c2", title: "City Lights", subtitle: "演示手势冲突协商" },
  { id: "c3", title: "Morning Coffee", subtitle: "ScrollView 保持可滚动" },
  { id: "c4", title: "Weekend Ride", subtitle: "双击优先于单击" },
];

export default function TapVsDoubleTapScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [lastAction, setLastAction] = useState("暂无操作");

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setLastAction(`单击选中：${id}`);
  };

  const handleLike = (id: string) => {
    setLikedIds((current) => {
      const next = { ...current };
      if (next[id]) {
        delete next[id];
        setLastAction(`双击取消点赞：${id}`);
      } else {
        next[id] = true;
        setLastAction(`双击点赞：${id}`);
      }
      return next;
    });
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Gesture Conflict</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">点击选中，双击点赞</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">双击优先；单击会等待双击失败。列表可正常滚动。</Text>

      <ScrollView className="mt-5" contentContainerStyle={{ gap: 10, paddingBottom: 20 }}>
        {CARDS.map((card) => (
          <FeedCard key={card.id} card={card} selected={selectedId === card.id} liked={Boolean(likedIds[card.id])} onSelect={handleSelect} onLike={handleLike} />
        ))}
      </ScrollView>

      <View className="rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">Status</Text>
        <Text className="mt-1 text-sm text-cream-900 dark:text-night-100">{lastAction}</Text>
        <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">总点赞：{Object.keys(likedIds).length}</Text>
      </View>
    </View>
  );
}
