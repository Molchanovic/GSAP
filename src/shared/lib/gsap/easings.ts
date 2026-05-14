export const ease = {
  smooth: 'power2.out',
  snappy: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  bounce: 'bounce.out',
  inOut: 'power2.inOut',
} as const

export type EaseKey = keyof typeof ease
