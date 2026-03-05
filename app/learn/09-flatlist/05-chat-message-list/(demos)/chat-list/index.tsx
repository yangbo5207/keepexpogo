import { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { ChatMessageList } from "./modules/ChatMessageList";
import { fetchOlderMessages, INITIAL_MESSAGES } from "./modules/mock";
import type { Message } from "./modules/types";

export default function ChatListScreen() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(0);

  const handleSend = useCallback((text: string) => {
    const nextId = `m-${Date.now()}`;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const newMessage: Message = {
      id: nextId,
      type: "text",
      text,
      isMine: true,
      time,
    };
    setMessages((prev) => [newMessage, ...prev]);
  }, []);

  const handleLoadMore = useCallback(async () => {
    const older = await fetchOlderMessages(pageRef.current);
    if (older.length === 0) {
      setHasMore(false);
      return;
    }
    pageRef.current += 1;
    setMessages((prev) => [...prev, ...older]);
  }, []);

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <ChatMessageList messages={messages} onSend={handleSend} onLoadMore={handleLoadMore} hasMore={hasMore} />
    </View>
  );
}
