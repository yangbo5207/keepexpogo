import { memo } from "react";
import { Image, Text, View } from "react-native";

export const TextBubble = memo(function TextBubble({ text, isMine, time }: { text: string; isMine: boolean; time: string }) {
  const avatar = isMine ? "我" : "TA";
  return (
    <View className={isMine ? "flex-row items-start justify-end gap-2" : "flex-row items-start gap-2"}>
      {!isMine ? (
        <View className="h-7 w-7 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
          <Text className="text-[11px] font-semibold text-primary-700 dark:text-primary-200">{avatar}</Text>
        </View>
      ) : null}
      <View className={isMine ? "max-w-[75%] rounded-xs rounded-br-sm bg-primary-500 px-3 py-2" : "max-w-[75%] rounded-xs rounded-bl-sm bg-cream-100 px-3 py-2 dark:bg-night-700"}>
        <Text className={isMine ? "text-white" : "text-cream-900 dark:text-night-100"}>{text}</Text>
        <Text className={isMine ? "mt-1 text-xs text-primary-100" : "mt-1 text-xs text-cream-500 dark:text-night-400"}>{time}</Text>
      </View>
      {isMine ? (
        <View className="h-7 w-7 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
          <Text className="text-[11px] font-semibold text-primary-700 dark:text-primary-200">{avatar}</Text>
        </View>
      ) : null}
    </View>
  );
});

export const ImageBubble = memo(function ImageBubble({ uri, width, height, isMine, time }: { uri: string; width: number; height: number; isMine: boolean; time: string }) {
  const avatar = isMine ? "我" : "TA";
  const maxWidth = 200;
  const aspectRatio = width / height;
  return (
    <View className={isMine ? "flex-row items-start justify-end gap-2" : "flex-row items-start gap-2"}>
      {!isMine ? (
        <View className="h-7 w-7 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
          <Text className="text-[11px] font-semibold text-primary-700 dark:text-primary-200">{avatar}</Text>
        </View>
      ) : null}
      <View>
        <Image source={{ uri }} style={{ width: maxWidth, aspectRatio }} className="rounded-xs" />
        <Text className="mt-1 text-xs text-cream-500 dark:text-night-400">{time}</Text>
      </View>
      {isMine ? (
        <View className="h-7 w-7 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900">
          <Text className="text-[11px] font-semibold text-primary-700 dark:text-primary-200">{avatar}</Text>
        </View>
      ) : null}
    </View>
  );
});

export const SystemNotice = memo(function SystemNotice({ text }: { text: string }) {
  return (
    <View className="flex-row items-center justify-center gap-2 py-2">
      <View className="h-6 w-6 items-center justify-center rounded-xs bg-cream-100 dark:bg-night-700">
        <Text className="text-[10px] font-semibold text-cream-500 dark:text-night-400">系</Text>
      </View>
      <Text className="rounded-full bg-cream-100 px-3 py-1 text-xs text-cream-500 dark:bg-night-700 dark:text-night-400">{text}</Text>
    </View>
  );
});
