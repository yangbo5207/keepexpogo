# ScrollableTabs 使用文档

## 组件位置

- `app/learn/08-scroll-tabs/01-scroll-tabs/(demos)/scroll-tabs/scrollable-tabs/ScrollableTabs.tsx`

## 功能说明

`ScrollableTabs` 是一个可横向滚动的 Tabs 组件，支持：

- Tab 数量较多时左右滑动
- 点击后自动将选中项滚动到可视区域中间
- Active 指示标平滑移动并始终对齐选中项中心
- 指示标宽度与样式可自定义

## 快速使用

```tsx
import { useState } from "react";
import { ScrollableTabs, type ScrollTabItem } from "./scrollable-tabs";

const TABS: ScrollTabItem[] = [
  { key: "all", label: "全部" },
  { key: "design", label: "设计系统" },
  { key: "gesture", label: "手势交互" },
];

export default function Example() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollableTabs
      tabs={TABS}
      activeIndex={activeIndex}
      onChange={setActiveIndex}
      indicatorWidth={18}
      indicatorClassName="absolute bottom-1 h-1 rounded-xs bg-primary-500 dark:bg-primary-300"
    />
  );
}
```

## Props

### `tabs`

- 类型：`ScrollTabItem[]`
- 说明：tabs 数据源

```ts
type ScrollTabItem = {
  key: string;
  label: string;
};
```

### `activeIndex`

- 类型：`number`
- 说明：当前选中项索引（受控）

### `onChange`

- 类型：`(index: number) => void`
- 说明：点击某项时回调新的索引

### `indicatorWidth`

- 类型：`number | undefined`
- 说明：指示标固定宽度；不传则跟随选中项宽度

### `indicatorClassName`

- 类型：`string | undefined`
- 说明：指示标样式类名（NativeWind）

### `indicatorStyle`

- 类型：`Omit<ViewStyle, "width" | "transform"> | undefined`
- 说明：指示标行内样式补充（不允许覆盖 `width` 和 `transform`）

## 交互逻辑

- 点击 tab 时，组件会计算目标偏移并调用 `scrollTo` 自动居中
- 指示标位置基于“内容坐标 - 当前滚动偏移”计算，避免滚动后错位
- 用户手动滚动时，指示标会实时跟随 `onScroll`

## 性能建议

- `tabs` 数据使用稳定引用（避免每次 render 重新创建数组）
- 大量 tabs（超大数据量）建议改造为 `FlatList`/`FlashList` 虚拟化方案
- 业务层尽量避免在 `onChange` 中执行重任务

## 常见问题

### 1. 为什么点击后没有自动居中？

- 确认 `activeIndex` 在 `onChange` 后有正确更新
- 确认外层没有拦截横向滚动手势

### 2. 指示标为什么看起来偏移？

- 如果使用了自定义 `indicatorWidth`，组件会自动按中心对齐
- 请避免在 `indicatorStyle` 中覆盖 `transform`
