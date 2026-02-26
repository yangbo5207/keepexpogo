import { Text, View, type ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

const BACK_CLASS = "absolute h-full w-full overflow-hidden rounded-3xl border border-warning-300 bg-warning-500 shadow-xl shadow-warning-500/30 dark:border-warning-700";

type FlipCardFaceProps = {
  style: Animated.AnimatedStyleProp<ViewStyle>;
};

export function FlipCardBack({ style }: FlipCardFaceProps) {
  return (
    <Animated.View
      style={[
        style,
        {
          backfaceVisibility: "hidden",
        },
      ]}
      className={BACK_CLASS}
    >
      <View className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-white/20" />
      <View className="absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-white/10" />

      <View className="flex-1 w-full px-5 pt-6">
        <Text className="text-xs font-semibold uppercase tracking-widest text-white/80">Rewards</Text>
        <View className="mt-4 gap-2">
          <Text className="text-3xl font-bold text-white">3,240</Text>
          <Text className="text-sm text-white/85">Points available</Text>
        </View>
      </View>

      <View className="w-full px-5 pb-5">
        <View className="rounded-2xl bg-white/15 p-4">
          <Text className="text-xs uppercase tracking-widest text-white/70">Next Reward</Text>
          <Text className="mt-2 text-sm font-semibold text-white">Free studio class</Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default FlipCardBack;
