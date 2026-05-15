<script setup lang="ts">
import { ref } from 'vue'
import { useParallaxAnimation } from '../model/useParallaxAnimation'

defineProps<{
  minHeight?: string
}>()

const section  = ref<HTMLElement | null>(null)
const bg       = ref<HTMLElement | null>(null)
const content  = ref<HTMLElement | null>(null)

useParallaxAnimation({ section, bg, content })
</script>

<template>
  <section
    ref="section"
    :class="$style.section"
    :style="{ minHeight: minHeight ?? '100vh' }"
  >
    <div ref="bg" :class="$style.bg">
      <slot name="bg" />
    </div>

    <div ref="content" :class="$style.content">
      <slot />
    </div>
  </section>
</template>

<style module lang="scss">
.section {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  position: absolute;
  inset: -20%;
  will-change: transform;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
}
</style>
