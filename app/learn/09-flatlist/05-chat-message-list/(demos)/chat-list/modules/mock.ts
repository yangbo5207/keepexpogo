import type { Message } from "./types";

export const INITIAL_MESSAGES: Message[] = [
  { id: "m-12", type: "text", text: "收到，明天 10 点见。", isMine: true, time: "10:12" },
  { id: "m-11", type: "image", uri: "https://picsum.photos/id/1062/900/600", width: 900, height: 600, isMine: false, time: "10:11" },
  { id: "m-10", type: "text", text: "这是地点截图，你看下。", isMine: false, time: "10:10" },
  { id: "m-9", type: "system", text: "你已将对方置顶", time: "10:08" },
  { id: "m-8", type: "text", text: "好，那我先出发。", isMine: true, time: "10:07" },
  { id: "m-7", type: "text", text: "我在路上，大概 20 分钟。", isMine: false, time: "10:06" },
];

const HISTORY_PAGES: Message[][] = [
  [
    { id: "h1-1", type: "text", text: "昨天开会纪要我发你了。", isMine: false, time: "09:58" },
    { id: "h1-2", type: "text", text: "好，我晚上看。", isMine: true, time: "09:59" },
    { id: "h1-3", type: "system", text: "以下是昨天的聊天记录", time: "10:00" },
  ],
  [
    { id: "h2-1", type: "image", uri: "https://picsum.photos/id/1025/900/600", width: 900, height: 600, isMine: true, time: "09:46" },
    { id: "h2-2", type: "text", text: "这张图你觉得如何？", isMine: true, time: "09:47" },
    { id: "h2-3", type: "text", text: "不错，颜色可以再暖一点。", isMine: false, time: "09:49" },
  ],
];

export async function fetchOlderMessages(page: number) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return HISTORY_PAGES[page] ?? [];
}
