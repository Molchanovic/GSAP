import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  cursor: Ref<HTMLElement | null>
  dot:    Ref<HTMLElement | null>
}

export function useCursorAnimation(refs: Refs) {
  // TODO: gsap.quickTo — самый производительный способ анимировать позицию
  // let xTo: (value: number) => void
  // let yTo: (value: number) => void

  function onMouseMove(e: MouseEvent) {
    // TODO: двигаем обводку с небольшой инерцией (quickTo с duration)
    // xTo(e.clientX)
    // yTo(e.clientY)

    // TODO: центральная точка следует мгновенно (отдельный quickTo с duration: 0)
  }

  function onMouseEnterLink() {
    // TODO: курсор увеличивается при hover на ссылки/кнопки
    // gsap.to(refs.cursor.value, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
  }

  function onMouseLeaveLink() {
    // TODO: возврат к нормальному размеру
    // gsap.to(refs.cursor.value, { scale: 1, duration: 0.3, ease: 'power2.out' })
  }

  onMounted(() => {
    if (!refs.cursor.value) return

    // TODO: инициализация quickTo
    // xTo = gsap.quickTo(refs.cursor.value, 'x', { duration: 0.4, ease: 'power3' })
    // yTo = gsap.quickTo(refs.cursor.value, 'y', { duration: 0.4, ease: 'power3' })

    window.addEventListener('mousemove', onMouseMove)

    // TODO: отслеживаем hover на все интерактивные элементы
    // document.querySelectorAll('a, button').forEach(el => {
    //   el.addEventListener('mouseenter', onMouseEnterLink)
    //   el.addEventListener('mouseleave', onMouseLeaveLink)
    // })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })
}
