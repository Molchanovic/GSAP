import { type Ref, onMounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Options {
  from?: 'left' | 'right' | 'top' | 'bottom'
  delay?: number
  duration?: number
}

const directionMap = {
  left:   { x: -60, y: 0 },
  right:  { x: 60,  y: 0 },
  top:    { x: 0,   y: -60 },
  bottom: { x: 0,   y: 60 },
}

export function useSlideIn(el: Ref<HTMLElement | null>, options: Options = {}) {
  const { from = 'bottom', delay = 0, duration = 0.7 } = options

  onMounted(() => {
    if (!el.value) return
    const { x, y } = directionMap[from]
    // TODO: gsap.from(el.value, { x, y, opacity: 0, duration, delay, ease: 'power3.out' })
  })
}
