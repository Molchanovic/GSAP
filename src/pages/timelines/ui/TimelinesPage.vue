<script setup lang="ts">
import { ref } from "vue";
import { useTimelinesDemo } from "../model/useTimelinesDemo";

const card = ref<HTMLElement | null>(null);
const parentRef = ref(null);

const { bounce, bounceToCorner, bounceToCenter } = useTimelinesDemo(
  parentRef,
  card,
);
</script>

<template>
  <NuxtLayout name="default">
    <template #badge>Timelines</template>
    <template #title>gsap.timeline()</template>
    <template #actions>
      <button :class="[$style.ctrl, $style.ctrlPlay]" @click="bounceToCenter">
        ▶ Play
      </button>
    </template>

    <div :class="$style.stage">
      <div ref="card" :class="$style.card">
        <span :class="$style.cardEyebrow">Release 2.0</span>
        <h2 :class="$style.cardTitle">Последовательные<br />анимации</h2>
        <p :class="$style.cardText">
          Timeline позволяет выстраивать цепочку твинов, управлять паузами,
          лейблами и скоростью воспроизведения.
        </p>
        <div :class="$style.cardTags">
          <span :class="$style.tag">to()</span>
          <span :class="$style.tag">from()</span>
          <span :class="$style.tag">labels</span>
          <span :class="$style.tag">stagger</span>
        </div>
        <button :class="$style.cardBtn">Подробнее</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style module lang="scss">
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--accent-bg);
  padding: 40px;
}

.card {
  max-width: 420px;
  padding: 36px;
  border: 1px solid var(--accent-border);
  border-radius: 16px;
  background: var(--bg);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cardEyebrow {
  font-size: 12px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.cardTitle {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.cardText {
  font-size: 15px;
  color: var(--text);
  line-height: 1.65;
}

.cardTags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 4px 10px;
  border-radius: 100px;
}

.cardBtn {
  cursor: pointer;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  color: #fff;
  width: fit-content;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
}

.ctrl {
  cursor: pointer;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  transition:
    border-color 0.2s,
    background 0.2s;
}

.ctrlPlay:hover {
  background: #22c55e20;
  border-color: #22c55e80;
  color: #22c55e;
}
</style>
