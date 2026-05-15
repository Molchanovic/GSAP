import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  scene:   Ref<HTMLElement | null>
  card:    Ref<HTMLElement | null>
  glareEl: Ref<HTMLElement | null>
}

export function useCardTiltAnimation(refs: Refs, maxAngle = 18) {
  function onMouseMove(e: MouseEvent) {
    const el = refs.card.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    // TODO: нормализованное смещение от центра (-0.5 … 0.5)
    // const x = (e.clientX - rect.left) / rect.width  - 0.5
    // const y = (e.clientY - rect.top)  / rect.height - 0.5

    // TODO: поворот
    // gsap.to(el, {
    //   rotateY:  x * maxAngle * 2,
    //   rotateX: -y * maxAngle * 2,
    //   transformPerspective: 800,
    //   duration: 0.3,
    //   ease: 'power2.out',
    // })

    // TODO: glare — позиция блика следует за мышью
    // gsap.to(refs.glareEl.value, {
    //   opacity: 1,
    //   background: `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
    //   duration: 0.3,
    // })
  }

  function onMouseLeave() {
    const el = refs.card.value
    if (!el) return
    // TODO: вернуть карточку в исходное положение
    // gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    // gsap.to(refs.glareEl.value, { opacity: 0, duration: 0.3 })
  }

  onMounted(() => {
    refs.scene.value?.addEventListener('mousemove', onMouseMove)
    refs.scene.value?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    refs.scene.value?.removeEventListener('mousemove', onMouseMove)
    refs.scene.value?.removeEventListener('mouseleave', onMouseLeave)
  })
}
