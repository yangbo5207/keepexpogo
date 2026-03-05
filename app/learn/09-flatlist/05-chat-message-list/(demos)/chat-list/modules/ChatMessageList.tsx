import { Button } from "@/components/ui/button";
import { useCallback, useRef, useState } from "react";
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageBubble, SystemNotice, TextBubble } from "./bubbles";
import type { Message } from "./types";

interface ChatMessageListProps {
  messages: Message[];
  onSend: (text: string) => void;
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
}

const LIST_CONTENT_STYLE = { padding: 12, gap: 8 } as const;
const LIST_LOADING_STYLE = { padding: 12 } as const;
const INPUT_PLACEHOLDER_COLOR = "#9e978a";

export function ChatMessageList({ messages, onSend, onLoadMore, hasMore }: ChatMessageListProps) {
  const insets = useSafeAreaInsets();
  const [inputText, setInputText] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const loadingRef = useRef(false);

  const handleSend = useCallback(() => {
    const text = inputText.trim();
    if (!text) {
      return;
    }
    onSend(text);
    setInputText("");
  }, [inputText, onSend]);

  const handleLoadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) {
      return;
    }
    loadingRef.current = true;
    setLoadingMore(true);
    try {
      await onLoadMore();
    } finally {
      loadingRef.current = false;
      setLoadingMore(false);
    }
  }, [hasMore, onLoadMore]);

  const renderMessage = useCallback(({ item }: { item: Message }) => {
    switch (item.type) {
      case "text":
        return <TextBubble text={item.text} isMine={item.isMine} time={item.time} />;
      case "image":
        return <ImageBubble uri={item.uri} width={item.width} height={item.height} isMine={item.isMine} time={item.time} />;
      case "system":
        return <SystemNotice text={item.text} />;
    }
  }, []);

  const keyExtractor = useCallback((item: Message) => item.id, []);

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}>
      <FlatList
        data={messages}
        inverted
        renderItem={renderMessage}
        keyExtractor={keyExtractor}
        className="flex-1"
        contentContainerStyle={LIST_CONTENT_STYLE}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="small" style={LIST_LOADING_STYLE} /> : null}
      />

      <View className="flex-row items-center border-t border-cream-200 bg-cream-50 px-3 pt-2 dark:border-night-600 dark:bg-night-800" style={{ paddingBottom: Math.max(insets.bottom, 8) }}>
        <TextInput
          className="mr-2 flex-1 rounded-xs bg-cream-100 px-4 py-2 text-cream-900 dark:bg-night-700 dark:text-night-100"
          placeholder="输入消息..."
          placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <Button label="发送" size="sm" className="px-4 py-2" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
}
