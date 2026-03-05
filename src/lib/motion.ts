export const motionTokens = {
  durations: { xs: 0.12, sm: 0.18, md: 0.24, lg: 0.32 },
  easing: { standard: [0.22, 1, 0.36, 1], inOut: [0.4, 0, 0.2, 1] as const },
  spring: {
    soft: { stiffness: 260, damping: 24, mass: 0.9 },
    snappy: { stiffness: 360, damping: 28, mass: 0.8 }
  }
};
