<script setup lang="ts">
import { ref } from 'vue'
import { useTextAnimation } from '../model/useTextAnimation'

const titleRef   = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const bodyRef    = ref<HTMLElement | null>(null)

const titleWords = ['Текстовые', 'анимации']
const subtitleChars = 'Каждый символ — отдельный элемент'.split('')
const bodyLines = [
  'GSAP позволяет разбивать текст на символы,',
  'слова и строки, анимируя каждый элемент',
  'независимо через stagger.',
]

const { animateTitle, animateSubtitle, animateBody, reset } = useTextAnimation({
  titleRef,
  subtitleRef,
  bodyRef,
})
</script>

<template>
  <NuxtLayout name="default" max-width="860px">
    <template #badge>Text</template>
    <template #title>Анимации текста</template>

    <div :class="$style.stage">
      <div ref="titleRef" :class="$style.title">
        <span v-for="word in titleWords" :key="word" :class="$style.word">{{ word }}</span>
      </div>

      <p ref="subtitleRef" :class="$style.subtitle">
        <span v-for="(char, i) in subtitleChars" :key="i" :class="$style.char">{{ char === ' ' ? ' ' : char }}</span>
      </p>

      <div ref="bodyRef" :class="$style.body">
        <p v-for="line in bodyLines" :key="line" :class="$style.line">{{ line }}</p>
      </div>
    </div>

    <div :class="$style.controls">
      <div :class="$style.row">
        <button :class="$style.btn" @click="animateTitle">Слова ↑</button>
        <button :class="$style.btn" @click="animateSubtitle">Символы ↑</button>
        <button :class="$style.btn" @click="animateBody">Строки ↑</button>
        <button :class="[$style.btn, $style.btnReset]" @click="reset">↺ reset</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style module lang="scss">
.stage {
  min-height: 320px;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 60px 48px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  overflow: hidden;
}

.title {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  overflow: hidden;
}

.word {
  display: inline-block;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
}

.subtitle {
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(18px, 2.5vw, 26px);
  color: var(--accent);
  overflow: hidden;
}

.char {
  display: inline-block;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.line {
  font-size: 16px;
  color: var(--text);
  line-height: 1.7;
  overflow: hidden;
}

.controls {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 28px;
}

.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}

.btnReset {
  border-color: var(--border);
  background: var(--bg);
  color: var(--text);
  margin-left: auto;

  &:hover {
    background: var(--border);
    color: var(--text-h);
  }
}
</style>
