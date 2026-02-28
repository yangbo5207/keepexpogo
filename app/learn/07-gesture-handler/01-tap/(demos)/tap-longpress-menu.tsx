import { useCallback, useMemo, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type DemoItem = {
  id: string;
  title: string;
  subtitle: string;
};

const ITEMS: DemoItem[] = [
  { id: "item-1", title: "React Native Gesture", subtitle: "点击打开详情，长按弹出菜单" },
  { id: "item-2", title: "Reanimated Motion", subtitle: "组合手势避免冲突触发" },
  { id: "item-3", title: "Interaction Pattern", subtitle: "列表项常见交互方式" },
];

function ListItem({ item, onOpen, onShowMenu }: { item: DemoItem; onOpen: (id: string) => void; onShowMenu: (id: string) => void }) {
  const pressed = useSharedValue(false);
  const highlightOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.97 : 1, { duration: 100 }) }],
    backgroundColor: `rgba(0,0,0,${highlightOpacity.value})`,
  }));

  const tap = Gesture.Tap()
    .maxDuration(300)
    .onBegin(() => {
      "worklet";
      pressed.value = true;
    })
    .onEnd((_event, success) => {
      "worklet";
      if (success) {
        runOnJS(onOpen)(item.id);
      }
    })
    .onFinalize(() => {
      "worklet";
      pressed.value = false;
      highlightOpacity.value = 0;
    });

  const longPress = Gesture.LongPress()
    .minDuration(400)
    .onStart(() => {
      "worklet";
      highlightOpacity.value = withTiming(0.05, { duration: 120 });
      runOnJS(onShowMenu)(item.id);
    })
    .onFinalize(() => {
      "worklet";
      pressed.value = false;
      highlightOpacity.value = withTiming(0, { duration: 120 });
    });

  const gesture = Gesture.Exclusive(longPress, tap);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View className="overflow-hidden rounded-xs border border-cream-200 bg-cream-100 px-4 py-3 dark:border-night-600 dark:bg-night-700" style={animatedStyle}>
        <Text className="text-sm font-semibold text-cream-900 dark:text-night-100">{item.title}</Text>
        <Text className="mt-1 text-xs text-cream-700 dark:text-night-300">{item.subtitle}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

export default function TapLongPressMenuScreen() {
  const [lastAction, setLastAction] = useState("暂无操作");

  const itemMap = useMemo(() => new Map(ITEMS.map((item) => [item.id, item])), []);

  const handleOpen = useCallback(
    (id: string) => {
      const item = itemMap.get(id);
      if (!item) return;
      setLastAction(`点击打开：${item.title}`);
    },
    [itemMap],
  );

  const handleShowMenu = useCallback(
    (id: string) => {
      const item = itemMap.get(id);
      if (!item) return;

      setLastAction(`长按菜单：${item.title}`);
      Alert.alert(item.title, "选择一个操作", [
        { text: "收藏", onPress: () => setLastAction(`已收藏：${item.title}`) },
        { text: "分享", onPress: () => setLastAction(`已分享：${item.title}`) },
        { text: "取消", style: "cancel" },
      ]);
    },
    [itemMap],
  );

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">Tap + LongPress</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">点击打开详情，长按弹出操作菜单</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">使用 Gesture.Exclusive(longPress, tap) 让两者互斥。</Text>

      <View className="mt-6 gap-3">
        {ITEMS.map((item) => (
          <ListItem key={item.id} item={item} onOpen={handleOpen} onShowMenu={handleShowMenu} />
        ))}
      </View>

      <View className="mt-6 rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">Last Action</Text>
        <Text className="mt-1 text-sm text-cream-900 dark:text-night-100">{lastAction}</Text>
      </View>
    </View>
  );
}
