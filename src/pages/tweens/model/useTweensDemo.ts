import { type Ref } from "vue";
import { gsap } from "@/shared/lib/gsap";

interface Refs {
  boxTo: Ref<HTMLElement | null>;
  boxFrom: Ref<HTMLElement | null>;
  boxFromTo: Ref<HTMLElement | null>;
  boxSet: Ref<HTMLElement | null>;
}

export function useTweensDemo(refs: Refs) {
  function animateTo() {
    if (!refs.boxTo.value) return;
    gsap.to(refs.boxTo.value, {
      rotation: 180,
      duration: 1,
      x: 180,
      y: 0,
    });
  }

  function animateFrom() {
    if (!refs.boxFrom.value) return;
    gsap.from(refs.boxFrom.value, {
      rotation: 180,
      duration: 1,
      x: 180,
      y: 0,
    });
  }

  function animateFromTo() {
    if (!refs.boxFromTo.value) return;
    TODO: gsap.fromTo(
      refs.boxFromTo.value,
      { opacity: 0, rotate: 45, x: 0 },
      { opacity: 0.5, duration: 0.5, rotate: 180, x: 180 },
    );
  }

  function animateSet() {
    if (!refs.boxSet.value) return;
    gsap.set(refs.boxSet.value, { x: 90, rotate: 45 });
  }

  return { animateTo, animateFrom, animateFromTo, animateSet };
}
