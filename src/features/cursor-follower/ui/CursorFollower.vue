<script setup lang="ts">
import { ref } from 'vue'
import { useCursorAnimation } from '../model/useCursorAnimation'

const cursor = ref<HTMLElement | null>(null)
const dot    = ref<HTMLElement | null>(null)

useCursorAnimation({ cursor, dot })
</script>

<template>
  <div ref="cursor" :class="$style.cursor" aria-hidden="true">
    <div ref="dot" :class="$style.dot" />
  </div>
</template>

<style module lang="scss">
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid var(--accent);
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;

  @media (hover: none) {
    display: none;
  }
}

.dot {
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  will-change: transform;
}
</style>
