import { type Ref } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  titleRef:    Ref<HTMLElement | null>
  subtitleRef: Ref<HTMLElement | null>
  bodyRef:     Ref<HTMLElement | null>
}

export function useTextAnimation(refs: Refs) {
  function animateTitle() {
    if (!refs.titleRef.value) return
    const words = refs.titleRef.value.querySelectorAll('.word')
    // TODO: gsap.from(words, { yPercent: 110, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
  }

  function animateSubtitle() {
    if (!refs.subtitleRef.value) return
    const chars = refs.subtitleRef.value.querySelectorAll('.char')
    // TODO: gsap.from(chars, { opacity: 0, y: 20, stagger: 0.02, duration: 0.4, ease: 'power2.out' })
  }

  function animateBody() {
    if (!refs.bodyRef.value) return
    const lines = refs.bodyRef.value.querySelectorAll('.line')
    // TODO: gsap.from(lines, { yPercent: 100, stagger: 0.1, duration: 0.6, ease: 'power2.out' })
  }

  function reset() {
    const targets = [
      refs.titleRef.value?.querySelectorAll('.word'),
      refs.subtitleRef.value?.querySelectorAll('.char'),
      refs.bodyRef.value?.querySelectorAll('.line'),
    ]
    // TODO: targets.forEach(t => t && gsap.set(t, { clearProps: 'all' }))
  }

  return { animateTitle, animateSubtitle, animateBody, reset }
}
