import { type Ref } from 'vue'
import { gsap } from '@/shared/lib/gsap'

export function useStaggerDemo(grid: Ref<HTMLElement | null>) {
  function getItems() {
    return grid.value ? Array.from(grid.value.children) : []
  }

  function animateFromBottom() {
    const items = getItems()
    if (!items.length) return
    // TODO: gsap.from(items, { y: 60, opacity: 0, stagger: { amount: 0.8, from: 'end' } })
  }

  function animateFromCenter() {
    const items = getItems()
    if (!items.length) return
    // TODO: gsap.from(items, { scale: 0.5, opacity: 0, stagger: { amount: 0.8, from: 'center', grid: 'auto' } })
  }

  function animateFromEdges() {
    const items = getItems()
    if (!items.length) return
    // TODO: gsap.from(items, { scale: 0, opacity: 0, stagger: { amount: 1, from: 'edges', grid: 'auto' } })
  }

  function reset() {
    const items = getItems()
    if (!items.length) return
    // TODO: gsap.set(items, { clearProps: 'all' })
  }

  return { animateFromBottom, animateFromCenter, animateFromEdges, reset }
}
