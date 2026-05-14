export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export interface ScrollAnimationConfig extends AnimationConfig {
  start?: string
  end?: string
  toggleActions?: string
  scrub?: boolean | number
  markers?: boolean
}

export type Timeline = gsap.core.Timeline
export type Tween = gsap.core.Tween
