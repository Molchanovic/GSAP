<script setup lang="ts">
import { ref } from 'vue'
import { useHeroAnimation } from '../model/useHeroAnimation'

const container = ref<HTMLElement | null>(null)

useHeroAnimation(container)

const titleWords = ['Animations', 'powered', 'by', 'GSAP']
</script>

<template>
  <section ref="container" class="hero">
    <span class="hero__eyebrow">GSAP + Vue 3 + FSD</span>

    <h1 class="hero__title">
      <span v-for="word in titleWords" :key="word" class="word">{{ word }}</span>
    </h1>

    <p class="hero__subtitle">
      Изучаем GSAP через Feature-Sliced Design — каждый слой на своём месте.
    </p>

    <div class="hero__cta">
      <button class="cta-btn">Начать</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  text-align: center;
  padding: 0 24px;
  gap: 24px;
}

.hero__eyebrow {
  font-size: 13px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 6px 14px;
  border-radius: 100px;
}

.hero__title {
  font-size: clamp(40px, 8vw, 88px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25em;
  overflow: hidden;
}

.word {
  display: inline-block;
}

.hero__subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--text);
  max-width: 480px;
  line-height: 1.6;
}

.hero__cta {
  margin-top: 8px;
}

.cta-btn {
  cursor: pointer;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  color: #fff;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
}
</style>
