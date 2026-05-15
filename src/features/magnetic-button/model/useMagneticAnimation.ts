import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

export function useMagneticAnimation(el: Ref<HTMLElement | null>, strength = 0.4) {
  function onMouseMove(e: MouseEvent) {
    if (!el.value) return
    const rect = el.value.getBoundingClientRect()
    // TODO: вычислить смещение от центра кнопки
    // const centerX = rect.left + rect.width / 2
    // const centerY = rect.top + rect.height / 2
    // const dx = (e.clientX - centerX) * strength
    // const dy = (e.clientY - centerY) * strength
    // gsap.to(el.value, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' })
  }

  function onMouseLeave() {
    if (!el.value) return
    // TODO: gsap.to(el.value, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
  }

  onMounted(() => {
    el.value?.addEventListener('mousemove', onMouseMove)
    el.value?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    el.value?.removeEventListener('mousemove', onMouseMove)
    el.value?.removeEventListener('mouseleave', onMouseLeave)
  })
}
