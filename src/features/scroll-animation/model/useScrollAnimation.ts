import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap, ScrollTrigger } from '@/shared/lib/gsap'
import { animationDefaults, scrollTriggerDefaults } from '@/shared/config/gsap.config'
import type { ScrollAnimationConfig } from '@/shared/types/animation.types'

export function useScrollAnimation(
  target: Ref<HTMLElement | null>,
  config: ScrollAnimationConfig = {},
) {
  let ctx: gsap.Context

  onMounted(() => {
    if (!target.value) return

    ctx = gsap.context(() => {
      gsap.fromTo(
        target.value!,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: config.duration ?? animationDefaults.duration,
          ease: config.ease ?? animationDefaults.ease,
          delay: config.delay ?? 0,
          scrollTrigger: {
            trigger: target.value!,
            start: config.start ?? scrollTriggerDefaults.start,
            end: config.end ?? scrollTriggerDefaults.end,
            toggleActions: config.toggleActions ?? scrollTriggerDefaults.toggleActions,
            markers: config.markers ?? false,
          },
        },
      )
    })
  })

  onUnmounted(() => {
    ctx?.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}
