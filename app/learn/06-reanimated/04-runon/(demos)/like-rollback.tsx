import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { Easing, interpolateColor, runOnJS, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from "react-native-reanimated";

export default function LikeRollbackScreen() {
  const AnimatedMaterialIcon = Animated.createAnimatedComponent(MaterialIcons);
  const [liked, setLiked] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [status, setStatus] = useState("等待点击");

  const heartScale = useSharedValue(1);
  const heartOffsetY = useSharedValue(0);
  const likeProgress = useSharedValue(0);
  const pressProgress = useSharedValue(0);

  const requestLike = () => {
    setSyncing(true);
    setStatus("动画结束，runOnJS 发起请求中...");

    setTimeout(() => {
      setLiked(false);
      setSyncing(false);
      setStatus("后端返回失败，已回滚点赞状态");
      likeProgress.value = withTiming(0, { duration: 280, easing: Easing.out(Easing.cubic) });
      heartScale.value = withSequence(withTiming(0.95, { duration: 90, easing: Easing.out(Easing.quad) }), withSpring(1, { damping: 20, stiffness: 260, mass: 0.8 }));
    }, 900);
  };

  const handlePressIn = () => {
    if (syncing || liked) return;
    pressProgress.value = withTiming(1, { duration: 170, easing: Easing.out(Easing.cubic) });
    heartScale.value = withTiming(0.93, { duration: 170, easing: Easing.out(Easing.cubic) });
  };

  const handlePressOut = () => {
    if (syncing || liked) return;
    pressProgress.value = withTiming(0, { duration: 140, easing: Easing.out(Easing.cubic) });
    heartScale.value = withTiming(1, { duration: 160, easing: Easing.out(Easing.cubic) });
  };

  const handlePress = () => {
    if (syncing || liked) return;

    setLiked(true);
    setStatus("点赞动画播放中...");
    pressProgress.value = withTiming(0, { duration: 120, easing: Easing.out(Easing.quad) });
    likeProgress.value = withTiming(1, { duration: 260, easing: Easing.out(Easing.cubic) });

    heartScale.value = withSequence(
      withTiming(1.14, { duration: 150, easing: Easing.out(Easing.cubic) }),
      withTiming(0.98, { duration: 110, easing: Easing.inOut(Easing.quad) }),
      withTiming(1.06, { duration: 110, easing: Easing.inOut(Easing.quad) }),
      withSpring(1, { damping: 18, stiffness: 260, mass: 0.8 }, (finished) => {
        if (finished) {
          runOnJS(requestLike)();
        }
      }),
    );
    heartOffsetY.value = withSequence(withTiming(-2, { duration: 120, easing: Easing.out(Easing.quad) }), withTiming(0, { duration: 220, easing: Easing.out(Easing.cubic) }));
  };

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: heartOffsetY.value }, { scale: heartScale.value }],
  }));

  const heartAnimatedProps = useAnimatedProps(() => ({
    color: interpolateColor(
      likeProgress.value + pressProgress.value * 0.22,
      [0, 1, 1.22],
      ["#8f8880", "#ef4444", "#dc2626"],
    ),
  }));

  return (
    <View className="flex-1 items-center justify-center bg-cream-50 px-6 dark:bg-night-800">
      <View className="items-center gap-6">
        <View className="h-32 w-32 items-center justify-center">
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            disabled={syncing}
            className="h-20 w-20 items-center justify-center rounded-full bg-white shadow-md shadow-black/10 dark:bg-night-700"
          >
            <Animated.View style={heartAnimatedStyle}>
              <AnimatedMaterialIcon name="favorite" size={54} color="#8f8880" animatedProps={heartAnimatedProps} />
            </Animated.View>
          </Pressable>
        </View>

        <Text className="text-center text-base font-semibold text-cream-900 dark:text-night-50">{status}</Text>
        <Text className="text-center text-sm text-cream-600 dark:text-night-300">点击心形: 动画完成后通过 runOnJS 模拟请求，失败后回滚</Text>
      </View>
    </View>
  );
}
