import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

export function useTimelinesDemo(card: Ref<HTMLElement | null>) {
  let tl: gsap.core.Timeline | null = null

  onMounted(() => {
    if (!card.value) return
    // TODO: создать timeline
    // tl = gsap.timeline({ paused: true })
    // tl.from(card.value.querySelector('.eyebrow'), { ... })
    // tl.from(card.value.querySelector('h2'), { ... }, '<0.1')
    // ...
  })

  onUnmounted(() => {
    tl?.kill()
  })

  function play()    { tl?.play() }
  function reverse() { tl?.reverse() }
  function restart() { tl?.restart() }

  return { play, reverse, restart }
}
