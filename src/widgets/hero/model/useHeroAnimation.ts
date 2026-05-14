import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from '@/shared/lib/gsap'
import { ease } from '@/shared/lib/gsap/easings'

export function useHeroAnimation(containerRef: Ref<HTMLElement | null>) {
  let ctx: gsap.Context

  onMounted(() => {
    if (!containerRef.value) return

    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: ease.snappy } })

      tl.fromTo(
        '.hero__eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          '.hero__title .word',
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.2',
        )
        .fromTo(
          '.hero__subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3',
        )
        .fromTo(
          '.hero__cta',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          '-=0.3',
        )
    }, containerRef.value)
  })

  onUnmounted(() => ctx?.revert())
}
