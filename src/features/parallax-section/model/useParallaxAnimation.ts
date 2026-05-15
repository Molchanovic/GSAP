import { type Ref, onMounted, onUnmounted } from 'vue'
import { gsap, ScrollTrigger } from '@/shared/lib/gsap'

interface Refs {
  section: Ref<HTMLElement | null>
  bg:      Ref<HTMLElement | null>
  content: Ref<HTMLElement | null>
}

export function useParallaxAnimation(refs: Refs) {
  let trigger: ScrollTrigger | undefined

  onMounted(() => {
    if (!refs.section.value || !refs.bg.value) return

    // TODO: параллакс фона — bg движется медленнее страницы
    // gsap.to(refs.bg.value, {
    //   yPercent: 30,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: refs.section.value,
    //     start: 'top bottom',
    //     end: 'bottom top',
    //     scrub: true,
    //   },
    // })

    // TODO (опционально): контент движется быстрее (обратный параллакс)
    // gsap.to(refs.content.value, {
    //   yPercent: -10,
    //   ease: 'none',
    //   scrollTrigger: { trigger: refs.section.value, scrub: true },
    // })
  })

  onUnmounted(() => {
    trigger?.kill()
  })
}
