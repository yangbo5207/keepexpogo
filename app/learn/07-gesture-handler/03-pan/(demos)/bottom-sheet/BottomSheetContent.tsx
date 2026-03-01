import { Text, View } from "react-native";

export function BottomSheetContent() {
  return (
    <>
      <View className="mb-5 items-center">
        <View className="h-1.5 w-14 rounded-xs bg-cream-400 dark:bg-night-400" />
      </View>

      <Text className="text-base font-semibold text-cream-900 dark:text-night-100">探索推荐</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">通过底部面板快速筛选内容、预览信息并直接执行操作。</Text>

      <View className="mt-5 flex-row gap-3">
        <View className="flex-1 rounded-xs border border-cream-200 bg-cream-50 px-3 py-3 dark:border-night-600 dark:bg-night-800">
          <Text className="text-xs uppercase tracking-wide text-cream-600 dark:text-night-300">今日推荐</Text>
          <Text className="mt-1 text-xl font-semibold text-cream-900 dark:text-night-100">12</Text>
        </View>
        <View className="flex-1 rounded-xs border border-cream-200 bg-cream-50 px-3 py-3 dark:border-night-600 dark:bg-night-800">
          <Text className="text-xs uppercase tracking-wide text-cream-600 dark:text-night-300">匹配度</Text>
          <Text className="mt-1 text-xl font-semibold text-success-600 dark:text-success-400">92%</Text>
        </View>
      </View>

      <View className="mt-5">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">筛选条件</Text>
        <View className="mt-2 flex-row flex-wrap gap-2">
          <View className="rounded-xs border border-primary-300 bg-primary-100 px-3 py-1.5 dark:border-primary-700 dark:bg-primary-900/30">
            <Text className="text-xs font-medium text-primary-700 dark:text-primary-200">附近 5km</Text>
          </View>
          <View className="rounded-xs border border-cream-300 bg-cream-50 px-3 py-1.5 dark:border-night-500 dark:bg-night-800">
            <Text className="text-xs font-medium text-cream-800 dark:text-night-200">评分 4.5+</Text>
          </View>
          <View className="rounded-xs border border-cream-300 bg-cream-50 px-3 py-1.5 dark:border-night-500 dark:bg-night-800">
            <Text className="text-xs font-medium text-cream-800 dark:text-night-200">可预订</Text>
          </View>
          <View className="rounded-xs border border-cream-300 bg-cream-50 px-3 py-1.5 dark:border-night-500 dark:bg-night-800">
            <Text className="text-xs font-medium text-cream-800 dark:text-night-200">今晚可用</Text>
          </View>
        </View>
      </View>

      <View className="mt-5 rounded-xs border border-cream-200 bg-cream-50 px-4 py-3 dark:border-night-600 dark:bg-night-800">
        <Text className="text-sm font-semibold text-cream-900 dark:text-night-100">Jazz & Coffee 夜场</Text>
        <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">周五 20:00 · 2.1km · 还剩 6 个名额</Text>
      </View>

      <View className="mt-5 flex-row gap-3">
        <View className="flex-1 items-center rounded-xs border border-cream-300 bg-cream-50 py-3 dark:border-night-500 dark:bg-night-800">
          <Text className="text-sm font-semibold text-cream-800 dark:text-night-200">稍后再看</Text>
        </View>
        <View className="flex-1 items-center rounded-xs bg-primary-500 py-3">
          <Text className="text-sm font-semibold text-white">立即预订</Text>
        </View>
      </View>
    </>
  );
}
