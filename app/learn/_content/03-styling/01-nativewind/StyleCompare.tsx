import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StyleCompare() {
  return (
    <View className="flex-1 gap-6 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        StyleSheet vs className
      </Text>

      {/* StyleSheet 写法 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          StyleSheet 写法
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardDesc}>
            使用 StyleSheet.create 定义样式对象，通过 style 属性传入。
          </Text>
          <View style={styles.badgeRow}>
            <View style={styles.badgePrimary}>
              <Text style={styles.badgeText}>React Native</Text>
            </View>
            <View style={styles.badgeSecondary}>
              <Text style={styles.badgeTextDark}>StyleSheet</Text>
            </View>
          </View>
        </View>
      </View>

      {/* NativeWind className 写法 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          NativeWind className 写法
        </Text>
        <View className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
          <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Card Title
          </Text>
          <Text className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            使用 className 直接编写 Tailwind 工具类，代码更简洁直观。
          </Text>
          <View className="mt-3 flex-row gap-2">
            <View className="rounded-full bg-blue-500 px-3 py-1">
              <Text className="text-xs font-semibold text-white">React Native</Text>
            </View>
            <View className="rounded-full bg-gray-200 px-3 py-1 dark:bg-gray-700">
              <Text className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                NativeWind
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
        <Text className="text-sm text-amber-800 dark:text-amber-200">
          两种方式最终渲染效果相同。NativeWind 在打包时将 className 转为 StyleSheet，没有运行时性能损耗。
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  cardDesc: {
    marginTop: 4,
    fontSize: 14,
    color: '#4b5563',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  badgePrimary: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeSecondary: {
    backgroundColor: '#e5e7eb',
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  badgeTextDark: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
});
