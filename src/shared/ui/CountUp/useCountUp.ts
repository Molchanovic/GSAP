import { type Ref, onMounted } from 'vue'
import { gsap } from '@/shared/lib/gsap'

interface Options {
  from?: number
  to: number
  duration?: number
}

export function useCountUp(el: Ref<HTMLElement | null>, options: Options) {
  onMounted(() => {
    if (!el.value) return
    const { from = 0, to, duration = 1.5 } = options
    // TODO: используем gsap.to на объекте-счётчике и обновляем el.value.textContent
    // const counter = { value: from }
    // gsap.to(counter, {
    //   value: to,
    //   duration,
    //   ease: 'power1.out',
    //   onUpdate: () => { el.value!.textContent = Math.round(counter.value).toString() },
    // })
  })
}
