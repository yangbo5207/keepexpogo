import { useState } from "react";
import { Text, View } from "react-native";
import { DraggableItem } from "./DraggableItem";

export default function LongPressDragScreen() {
  const [status, setStatus] = useState("等待操作");

  const handleDragStart = () => {
    setStatus("拖拽开始");
  };

  const handleDragEnd = () => {
    setStatus("拖拽结束");
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">LongPress Drag</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">长按触发拖拽</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">LongPress 与 Pan 同时识别，使用 activateAfterLongPress 保证交互一致。</Text>

      <View className="mt-6 gap-3">
        <DraggableItem onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
      </View>

      <View className="mt-6 rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">Status</Text>
        <Text className="mt-1 text-sm text-cream-900 dark:text-night-100">{status}</Text>
      </View>
    </View>
  );
}
