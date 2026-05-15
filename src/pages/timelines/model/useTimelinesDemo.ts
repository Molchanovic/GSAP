// composables/useBounce.js
import gsap from "gsap";

export function useTimelinesDemo(parentRef: any, childRef: any) {
  const bounce = (x: number, y: number) => {
    if (!childRef.value || !parentRef.value) return;

    // Ограничиваем координаты границами родителя
    const maxX = parentRef.value.offsetWidth - childRef.value.offsetWidth;
    const maxY = parentRef.value.offsetHeight - childRef.value.offsetHeight;

    const targetX = Math.min(Math.max(0, x), maxX);
    const targetY = Math.min(Math.max(0, y), maxY);

    // Убиваем предыдущую анимацию и запускаем новую
    gsap.killTweensOf(childRef.value);
    gsap.to(childRef.value, {
      x: targetX,
      y: targetY,
      duration: 1,
      ease: "bounce.out",
    });
  };

  const bounceToCorner = () => {
    if (!parentRef.value || !childRef.value) return;

    const maxX = parentRef.value.offsetWidth - childRef.value.offsetWidth;
    const maxY = parentRef.value.offsetHeight - childRef.value.offsetHeight;

    bounce(maxX, maxY);
  };

  const bounceToCenter = () => {
    if (!parentRef.value || !childRef.value) return;

    const centerX =
      (parentRef.value.offsetWidth - childRef.value.offsetWidth) / 2;
    const centerY =
      (parentRef.value.offsetHeight - childRef.value.offsetHeight) / 2;

    bounce(centerX, centerY);
  };

  return { bounce, bounceToCorner, bounceToCenter };
}
