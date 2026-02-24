import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function NavLinkIndex() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <Text className="text-sm text-gray-500 dark:text-gray-400">
        Tap links below — each demonstrates a different Link prop behavior.
      </Text>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{'<Link href="...">'}  (default = navigate)</Text>
        {[
          { href: '/expo-demos/nav-link/about', label: '/about', emoji: '📄' },
          { href: '/expo-demos/nav-link/blog', label: '/blog', emoji: '📝' },
          { href: '/expo-demos/nav-link/contact', label: '/contact', emoji: '✉️' },
        ].map((link) => (
          <Link key={link.href} href={link.href as any} asChild>
            <Pressable className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-3.5 active:bg-gray-100 dark:bg-gray-800">
              <Text className="text-lg">{link.emoji}</Text>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{link.label}</Text>
                <Text className="text-[10px] text-gray-400">navigate — won't duplicate</Text>
              </View>
              <Text className="text-gray-400">→</Text>
            </Pressable>
          </Link>
        ))}
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{'<Link push href="...">'}</Text>
        <Link href="/expo-demos/nav-link/blog" push asChild>
          <Pressable className="flex-row items-center gap-3 rounded-xl bg-teal-50 p-3.5 active:bg-teal-100 dark:bg-teal-900/20">
            <Text className="text-lg">📝</Text>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-teal-600 dark:text-teal-400">/blog</Text>
              <Text className="text-[10px] text-gray-400">push — always new entry</Text>
            </View>
            <Text className="text-teal-400">→</Text>
          </Pressable>
        </Link>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{'<Link replace href="...">'}</Text>
        <Link href="/expo-demos/nav-link/about" replace asChild>
          <Pressable className="flex-row items-center gap-3 rounded-xl bg-amber-50 p-3.5 active:bg-amber-100 dark:bg-amber-900/20">
            <Text className="text-lg">📄</Text>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-amber-600 dark:text-amber-400">/about</Text>
              <Text className="text-[10px] text-gray-400">replace — swaps current screen</Text>
            </View>
            <Text className="text-amber-400">↻</Text>
          </Pressable>
        </Link>
      </View>

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'import { Link, Redirect } from "expo-router"\n\n// Default: navigate behavior\n<Link href="/about">About</Link>\n\n// Always push new screen\n<Link push href="/blog">Blog</Link>\n\n// Replace current screen\n<Link replace href="/about">About</Link>\n\n// Conditional redirect\nif (!session) {\n  return <Redirect href="/login" />\n}'}
        </Text>
      </View>
    </ScrollView>
  );
}
