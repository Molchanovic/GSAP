import { type Ref, onMounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Options {
  delay?: number
  duration?: number
}

export function useFadeIn(el: Ref<HTMLElement | null>, options: Options = {}) {
  onMounted(() => {
    if (!el.value) return
    // TODO: gsap.from(el.value, { opacity: 0, y: 24, duration: options.duration, delay: options.delay, ease: 'power2.out' })
  })
}
