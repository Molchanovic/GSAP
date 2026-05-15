<script setup lang="ts">
import { ref } from 'vue'
import { useStaggerDemo } from '../model/useStaggerDemo'

const grid = ref<HTMLElement | null>(null)

const { animateFromBottom, animateFromCenter, animateFromEdges, reset } = useStaggerDemo(grid)

const items = Array.from({ length: 12 }, (_, i) => i + 1)
</script>

<template>
  <main :class="$style.page">
    <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>

    <header :class="$style.header">
      <span :class="$style.badge">Stagger</span>
      <h1>stagger animations</h1>
    </header>

    <div ref="grid" :class="$style.grid">
      <div v-for="n in items" :key="n" :class="$style.item">
        <span :class="$style.itemNum">{{ n }}</span>
      </div>
    </div>

    <div :class="$style.controls">
      <p :class="$style.label">from</p>
      <div :class="$style.row">
        <button :class="$style.btn" @click="animateFromBottom">↑ bottom</button>
        <button :class="$style.btn" @click="animateFromCenter">⊙ center</button>
        <button :class="$style.btn" @click="animateFromEdges">◈ edges</button>
        <button :class="[$style.btn, $style.btnReset]" @click="reset">↺ reset</button>
      </div>
    </div>
  </main>
</template>

<style module lang="scss">
.page {
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 24px 120px;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 40px;
  transition: color 0.2s;

  &:hover { color: var(--accent); }
}

.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;

  h1 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }
}

.badge {
  font-size: 12px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 5px 12px;
  border-radius: 100px;
  width: fit-content;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.item {
  aspect-ratio: 1;
  border-radius: 14px;
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.itemNum {
  font-family: var(--mono);
  font-size: 18px;
  font-weight: 600;
  color: var(--accent);
}

.controls {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 28px;
}

.label {
  font-size: 12px;
  font-family: var(--mono);
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
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
