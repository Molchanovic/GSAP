import { type Ref, ref, onUnmounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Refs {
  flipCardInner: Ref<HTMLElement | null>
  stackRef:      Ref<HTMLElement | null>
}

export function useCardsDemo(refs: Refs) {
  const isFlipped = ref(false)
  const isSpread  = ref(false)

  /* ——— Flip ——— */
  function flipCard() {
    isFlipped.value = !isFlipped.value
    if (!refs.flipCardInner.value) return
    // TODO: перевернуть через GSAP timeline
    // gsap.to(refs.flipCardInner.value, {
    //   rotateY: isFlipped.value ? 180 : 0,
    //   duration: 0.7,
    //   ease: 'power2.inOut',
    // })
  }

  /* ——— Stack ——— */
  function spreadStack() {
    if (!refs.stackRef.value || isSpread.value) return
    isSpread.value = true
    const cards = refs.stackRef.value.querySelectorAll('[class*="stackCard"]')
    // TODO: развернуть карточки с stagger
    // gsap.to(cards, {
    //   y: (i) => i * 90,
    //   scale: 1,
    //   duration: 0.5,
    //   stagger: 0.05,
    //   ease: 'power3.out',
    // })
  }

  function collapseStack() {
    if (!refs.stackRef.value || !isSpread.value) return
    isSpread.value = false
    const cards = refs.stackRef.value.querySelectorAll('[class*="stackCard"]')
    // TODO: сложить обратно
    // gsap.to(cards, {
    //   y: (i) => i * 8,
    //   scale: (i) => 1 - i * 0.04,
    //   duration: 0.5,
    //   stagger: { amount: 0.2, from: 'end' },
    //   ease: 'power3.out',
    // })
  }

  onUnmounted(() => {
    gsap.killTweensOf(refs.flipCardInner.value)
    gsap.killTweensOf(refs.stackRef.value?.querySelectorAll('[class*="stackCard"]'))
  })

  return { isFlipped, isSpread, flipCard, spreadStack, collapseStack }
}
