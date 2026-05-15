<script setup lang="ts">
import { ref } from 'vue'
import { useCardTiltAnimation } from '../model/useCardTiltAnimation'

withDefaults(defineProps<{
  maxAngle?: number
  glare?: boolean
}>(), {
  maxAngle: 18,
  glare: true,
})

const scene = ref<HTMLElement | null>(null)
const card  = ref<HTMLElement | null>(null)
const glareEl = ref<HTMLElement | null>(null)

useCardTiltAnimation({ scene, card, glareEl })
</script>

<template>
  <div ref="scene" :class="$style.scene">
    <div ref="card" :class="$style.card">
      <slot />
      <div v-if="glare" ref="glareEl" :class="$style.glare" />
    </div>
  </div>
</template>

<style module lang="scss">
.scene {
  perspective: 800px;
  display: inline-flex;
}

.card {
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  border-radius: 20px;
  overflow: hidden;
}

.glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, transparent 60%);
  opacity: 0;
  will-change: opacity, background;
}
</style>
