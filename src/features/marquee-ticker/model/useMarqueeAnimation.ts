import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Options {
  direction?: 'left' | 'right'
  speed?: number
  pauseOnHover?: boolean
}

export function useMarqueeAnimation(
  track: Ref<HTMLElement | null>,
  options: Options = {},
) {
  const { direction = 'left', speed = 25, pauseOnHover = true } = options
  let tween: gsap.core.Tween | null = null

  onMounted(() => {
    if (!track.value) return

    // TODO: ширина одной «копии» контента = половина полного трека
    // const totalWidth = track.value.scrollWidth
    // const singleWidth = totalWidth / 2

    // TODO: бесконечное движение — x идёт от 0 до -singleWidth, затем repeat
    // tween = gsap.to(track.value, {
    //   x: direction === 'left' ? -singleWidth : singleWidth,
    //   duration: singleWidth / speed, // скорость в px/s
    //   ease: 'none',
    //   repeat: -1,
    //   // при direction === 'right' нужно сначала поставить x: -singleWidth
    // })

    // TODO: пауза при hover
    // if (pauseOnHover) {
    //   track.value.addEventListener('mouseenter', () => tween?.pause())
    //   track.value.addEventListener('mouseleave', () => tween?.resume())
    // }
  })

  onUnmounted(() => {
    tween?.kill()
  })
}
