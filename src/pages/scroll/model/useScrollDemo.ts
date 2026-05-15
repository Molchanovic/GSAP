import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap, ScrollTrigger } from '@/shared/lib/gsap'

interface Refs {
  fadeSection:  Ref<HTMLElement | null>
  pinSection:   Ref<HTMLElement | null>
  pinSticky:    Ref<HTMLElement | null>
  progressBar:  Ref<HTMLElement | null>
}

export function useScrollDemo(refs: Refs) {
  onMounted(() => {
    // TODO: прогресс-бар страницы
    // gsap.to(refs.progressBar.value, {
    //   width: '100%',
    //   ease: 'none',
    //   scrollTrigger: { scrub: 0.3, start: 'top top', end: 'bottom bottom' },
    // })

    // TODO: секция 01 — fade on scroll
    // gsap.from(refs.fadeSection.value, {
    //   opacity: 0,
    //   y: 60,
    //   scrollTrigger: { trigger: refs.fadeSection.value, start: 'top 80%', toggleActions: '...' },
    // })

    // TODO: секция 02 — pin + scrub
    // ScrollTrigger.create({ trigger: refs.pinSection.value, pin: refs.pinSticky.value, ... })

    // TODO: секция 03 — batch
    // ScrollTrigger.batch('.batchCard', { onEnter: batch => gsap.from(batch, { stagger: 0.1, ... }) })
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
}
