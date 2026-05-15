import { type Ref, reactive } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  titleRef:   Ref<HTMLElement | null>
  coverRef:   Ref<HTMLElement | null>
  wipeRef:    Ref<HTMLElement | null>
  wipeMaskRef: Ref<HTMLElement | null>
  statsRef:   Ref<HTMLElement | null>
}

export function useRevealDemo(refs: Refs) {
  const revealed = reactive({ title: false, wipe: false, stats: false })

  function revealTitle() {
    if (!refs.coverRef.value) return

    if (revealed.title) {
      // TODO: сбросить — cover закрывает текст снова
      // gsap.to(refs.coverRef.value, { x: '0%', duration: 0.5, ease: 'power2.in' })
      revealed.title = false
      return
    }

    revealed.title = true
    // TODO: cover уезжает вправо, открывая текст
    // gsap.to(refs.coverRef.value, { x: '101%', duration: 0.8, ease: 'power3.inOut' })
    //
    // Вариант с clipPath:
    // gsap.fromTo(refs.titleRef.value, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' })
  }

  function revealWipe() {
    if (!refs.wipeMaskRef.value) return

    if (revealed.wipe) {
      // TODO: сбросить
      // gsap.to(refs.wipeMaskRef.value, { scaleX: 1, duration: 0.5, ease: 'power2.in', transformOrigin: 'right' })
      revealed.wipe = false
      return
    }

    revealed.wipe = true
    // TODO: маска схлопывается влево — контент открывается
    // gsap.to(refs.wipeMaskRef.value, { scaleX: 0, duration: 0.9, ease: 'power3.inOut', transformOrigin: 'right' })
  }

  function revealStats() {
    if (!refs.statsRef.value) return

    if (revealed.stats) {
      revealed.stats = false
      return
    }

    revealed.stats = true
    const items = refs.statsRef.value.querySelectorAll('[class*="statItem"]')
    // TODO: карточки появляются снизу с stagger
    // gsap.from(items, {
    //   y: 40,
    //   opacity: 0,
    //   duration: 0.6,
    //   stagger: 0.1,
    //   ease: 'power3.out',
    // })
    // TODO: числа считают вверх (запуск CountUp composable или ручная анимация)
  }

  return { revealed, revealTitle, revealWipe, revealStats }
}
