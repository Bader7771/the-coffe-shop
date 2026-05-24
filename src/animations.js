export const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const fadeUpTransition = {
  duration: 0.6,
  ease: 'easeOut',
};
