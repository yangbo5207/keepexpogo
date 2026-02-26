import { Article } from '@/types/learn';

const article: Article = {
  id: '05-interpolate',
  title: 'Interpolate 插值',
  description: '用 interpolate 把一个数值映射成多种视觉变化。',
  demos: [
    {
      id: 'reanimated__interpolate__basic',
      title: '基础插值示例',
      description: '进度值驱动位移、缩放与透明度。',
      route: '/learn/06-reanimated/05-interpolate/basic',
    },
    {
      id: 'reanimated__interpolate__color',
      title: '颜色插值',
      description: '使用 interpolateColor 让颜色随进度变化。',
      route: '/learn/06-reanimated/05-interpolate/color',
    },
    {
      id: 'reanimated__interpolate__multi-prop',
      title: '多属性插值',
      description: '同时驱动缩放、旋转、圆角与颜色。',
      route: '/learn/06-reanimated/05-interpolate/multi-prop',
    },
    {
      id: 'reanimated__interpolate__extrapolation',
      title: 'Extrapolation 模式对比',
      description: 'CLAMP 与 EXTEND 在超出范围时的表现差异。',
      route: '/learn/06-reanimated/05-interpolate/extrapolation',
    },
  ],
};

export default article;
