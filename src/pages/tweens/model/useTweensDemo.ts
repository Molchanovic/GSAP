import { type Ref } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  boxTo: Ref<HTMLElement | null>
  boxFrom: Ref<HTMLElement | null>
  boxFromTo: Ref<HTMLElement | null>
  boxSet: Ref<HTMLElement | null>
}

export function useTweensDemo(refs: Refs) {
  function animateTo() {
    if (!refs.boxTo.value) return
    // TODO: gsap.to(refs.boxTo.value, { ... })
  }

  function animateFrom() {
    if (!refs.boxFrom.value) return
    // TODO: gsap.from(refs.boxFrom.value, { ... })
  }

  function animateFromTo() {
    if (!refs.boxFromTo.value) return
    // TODO: gsap.fromTo(refs.boxFromTo.value, { ... }, { ... })
  }

  function animateSet() {
    if (!refs.boxSet.value) return
    // TODO: gsap.set(refs.boxSet.value, { ... })
  }

  return { animateTo, animateFrom, animateFromTo, animateSet }
}
