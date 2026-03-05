# ScrollableTabs 实现原理详解

## 文件位置

- 组件：`scrollable-tabs/ScrollableTabs.tsx`
- 子组件：`scrollable-tabs/TabItem.tsx`
- 用法文档：`README.md`

---

## 1. 目标与约束

这个组件要解决 4 个核心问题：

1. Tab 很多时支持横向滚动
2. 点击任意 Tab 后，自动滚动到“尽量居中”
3. 指示标在任意滚动状态下都与选中项中心对齐
4. 在保证交互稳定的前提下尽量减少无效渲染

---

## 2. 数据与状态分层

组件内部将状态分成两类：

### 2.1 React 层（少量、必要）

- `activeIndex`：由父组件受控传入
- `tabs`：数据源

React 状态只负责“语义状态”（谁被选中），不负责高频动画帧。

### 2.2 Ref / SharedValue 层（高频与测量）

- `itemLayoutsRef`：缓存每个 tab 的 `x/width`
- `containerWidthRef`：可视区域宽度
- `contentWidthRef`：内容总宽度
- `scrollX`：当前滚动偏移（来自 `onScroll`）
- `indicatorContentX`：指示标在内容坐标系下的目标 x
- `indicatorW`：指示标宽度

这样可以避免大量 `setState` 导致组件重复渲染。

---

## 3. 自动居中算法

点击或激活某个 tab 时，会执行 `animateToIndex(index)`：

1. 读取当前项布局 `layout = { x, width }`
2. 计算目标中心点：
   - `itemCenter = layout.x + layout.width / 2`
3. 让它尽量居中到容器：
   - `targetX = itemCenter - containerWidth / 2`
4. 限制在滚动边界：
   - `maxScroll = contentWidth - containerWidth`
   - `targetX = clamp(targetX, 0, maxScroll)`
5. 调用 `scrollRef.current?.scrollTo({ x: targetX, animated: true })`

这就是“自动滚动到中间位置”的核心。

---

## 4. 指示标始终居中的关键

指示标不是直接使用可视坐标，而是先算“内容坐标”：

- `indicatorContentX = layout.x + (layout.width - indicatorWidth) / 2`

再在动画样式里减去当前滚动偏移：

- `translateX = indicatorContentX - scrollX`

这样无论列表滚到哪里，指示标都能始终跟随选中项中心，不会出现越滚越偏。

---

## 5. 为什么不用全量 state 管布局

如果每个 tab 的 `onLayout` 都触发 `setState`：

- 首次渲染会出现 N 次 re-render（N = tab 数量）
- 滚动中布局变化也可能放大重渲染成本

所以这里使用 `itemLayoutsRef` 缓存布局：

- 更新布局不会触发组件重渲染
- 仅在必要时触发动画计算

---

## 6. 性能优化策略

### 6.1 `TabItem` 使用 `memo`

`TabItem` 只在这些字段变化时重渲染：

- `active`
- `label` / `index`
- 传入回调引用变化

这样切换 tab 时，通常只会影响少量子项。

### 6.2 回调稳定性

- `handleItemLayout`、`handleTabPress` 使用稳定回调
- 通过 `ref` 读取最新索引与动画函数，避免闭包陈旧

### 6.3 高频动画在 Reanimated 层

- `scrollX` 由 `onScroll` 写入 shared value
- 指示标 `translateX/width` 由 `useAnimatedStyle + withTiming` 驱动

避免把高频帧更新放回 React 线程。

---

## 7. 常见交互坑与处理思路

### 坑 1：点击后不自动居中

常见原因：

- 当前 index 对应布局尚未测量
- 外层手势容器干扰滚动

处理：

- 布局写入后若是 active 项，立即触发一次 `animateToIndex`

### 坑 2：指示标错位

常见原因：

- 只用内容坐标，没有减去 `scrollX`

处理：

- 保持公式：`translateX = indicatorContentX - scrollX`

### 坑 3：滚动动画“跳起点”

常见原因：

- 用历史目标位置作为下一次动画起点，而不是当前位置

处理：

- 依赖 ScrollView 原生 `animated: true`，滚动起点由当前实际位置决定

---

## 8. 可继续演进的方向

如果 tab 数量进一步增大（例如上百个）：

1. 使用 `FlatList/FlashList` 做横向虚拟化
2. 提供可配置滚动参数（时长、曲线）
3. 支持动态插入/删除 tab 时的平滑过渡

---

## 9. 总结

该实现的本质是：

- 用布局测量建立“内容坐标系”
- 用滚动偏移把内容坐标转换为“可视坐标”
- 用最少 React 状态 + Reanimated shared value 完成平滑过渡

这套组合能在复杂交互下保持稳定、对齐准确，并兼顾性能。
