import { Article } from '@/types/learn';

const article: Article = {
  id: '07-modals',
  title: 'Modals',
  description: 'Modal presentation styles, transparent modals, and dismiss patterns.',
  demos: [
    {
      id: 'expo-router__modals__modal-presentation',
      title: 'Modal Presentation',
      description: 'Standard modal, fullScreenModal, and formSheet presentation styles.',
      route: '/learn/04-expo-router/07-modals/modal-present',
    },
    {
      id: 'expo-router__modals__transparent-modal',
      title: 'Transparent Modal',
      description: 'Semi-transparent overlay modal with tap-to-dismiss background.',
      route: '/learn/04-expo-router/07-modals/modal-transparent',
    },
    {
      id: 'expo-router__modals__dismiss-patterns',
      title: 'Dismiss Patterns',
      description: 'Compare back, dismiss, dismiss(2), and dismissAll for closing stacked modals.',
      route: '/learn/04-expo-router/07-modals/modal-dismiss',
    },
  ],
};

export default article;
