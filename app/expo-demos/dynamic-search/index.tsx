import { useState } from 'react';
import { View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const categories = ['all', 'tech', 'design', 'business', 'science'];

const allResults = [
  { title: 'React Native Performance Tips', category: 'tech', emoji: '⚡' },
  { title: 'Expo Router Deep Dive', category: 'tech', emoji: '🔀' },
  { title: 'Design System Principles', category: 'design', emoji: '🎨' },
  { title: 'Typography in Mobile Apps', category: 'design', emoji: '✏️' },
  { title: 'Startup Funding Guide', category: 'business', emoji: '💰' },
  { title: 'Quantum Computing Basics', category: 'science', emoji: '🔬' },
];

export default function DynamicSearchIndex() {
  const params = useLocalSearchParams<{ q?: string; category?: string }>();
  const router = useRouter();
  const [query, setQuery] = useState(params.q || '');
  const [category, setCategory] = useState(params.category || 'all');
  const [submitted, setSubmitted] = useState(!!params.q || !!params.category);

  const filtered = allResults.filter((r) => {
    const matchQuery = !query || r.title.toLowerCase().includes(query.toLowerCase());
    const matchCat = category === 'all' || r.category === category;
    return matchQuery && matchCat;
  });

  const urlParams = new URLSearchParams();
  if (query) urlParams.set('q', query);
  if (category !== 'all') urlParams.set('category', category);
  const paramString = urlParams.toString();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row gap-2">
        <TextInput
          className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          placeholder="Search..."
          placeholderTextColor="#9ca3af"
          value={query}
          onChangeText={(t) => { setQuery(t); setSubmitted(false); }}
          onSubmitEditing={() => setSubmitted(true)}
        />
        <Pressable onPress={() => setSubmitted(true)} className="items-center justify-center rounded-lg bg-indigo-500 px-4 active:bg-indigo-600">
          <Text className="text-sm font-semibold text-white">Go</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2">
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => { setCategory(cat); setSubmitted(true); }}
              className={`rounded-full px-3.5 py-1.5 ${category === cat ? 'bg-indigo-500 dark:bg-indigo-600' : 'bg-gray-100 dark:bg-gray-800'}`}
            >
              <Text className={`text-xs font-medium ${category === cat ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>{cat}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">URL & Search Params</Text>
        <View className="rounded-lg bg-white p-3 dark:bg-gray-800">
          <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
            /search{paramString ? `?${paramString}` : ''}
          </Text>
        </View>
        <View className="mt-2 rounded-lg bg-white p-3 dark:bg-gray-800">
          <Text className="font-mono text-xs text-gray-600 dark:text-gray-400">
            useLocalSearchParams() →{'\n'}
            {'{ '}{query ? `q: "${query}"` : ''}{query && category !== 'all' ? ', ' : ''}{category !== 'all' ? `category: "${category}"` : ''}{!query && category === 'all' ? '/* empty */' : ''}{' }'}
          </Text>
        </View>
      </View>

      {submitted && (
        <View className="gap-3">
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">Results ({filtered.length})</Text>
          {filtered.length === 0 ? (
            <View className="items-center rounded-xl bg-gray-50 py-8 dark:bg-gray-800">
              <Text className="text-gray-400">No results found</Text>
            </View>
          ) : (
            filtered.map((r, i) => (
              <View key={i} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-3.5 dark:bg-gray-800">
                <Text className="text-lg">{r.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-sm font-medium text-gray-800 dark:text-gray-100">{r.title}</Text>
                  <Text className="text-xs text-gray-400">{r.category}</Text>
                </View>
              </View>
            ))
          )}
        </View>
      )}

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// Navigate with query params:\nrouter.push("/search?q=expo&category=tech")\n\n// Or use object form:\nrouter.push({\n  pathname: "/search",\n  params: { q: "expo", category: "tech" }\n})'}
        </Text>
      </View>
    </ScrollView>
  );
}
