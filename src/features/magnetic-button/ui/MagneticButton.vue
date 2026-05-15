<script setup lang="ts">
import { ref } from 'vue'
import { useMagneticAnimation } from '../model/useMagneticAnimation'

withDefaults(defineProps<{
  strength?: number
}>(), {
  strength: 0.4,
})

const btnRef = ref<HTMLElement | null>(null)

useMagneticAnimation(btnRef)
</script>

<template>
  <button ref="btnRef" :class="$style.btn">
    <span :class="$style.label">
      <slot>Hover me</slot>
    </span>
  </button>
</template>

<style module lang="scss">
.btn {
  cursor: pointer;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  will-change: transform;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.label {
  display: block;
  pointer-events: none;
}
</style>
