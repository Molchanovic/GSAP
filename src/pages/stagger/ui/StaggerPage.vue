<script setup lang="ts">
import { ref } from 'vue'
import { useStaggerDemo } from '../model/useStaggerDemo'

const grid = ref<HTMLElement | null>(null)

const { animateFromBottom, animateFromCenter, animateFromEdges, reset } = useStaggerDemo(grid)

const items = Array.from({ length: 12 }, (_, i) => i + 1)
</script>

<template>
  <NuxtLayout name="default" max-width="860px">
    <template #badge>Stagger</template>
    <template #title>stagger animations</template>

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
  </NuxtLayout>
</template>

<style module lang="scss">
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
