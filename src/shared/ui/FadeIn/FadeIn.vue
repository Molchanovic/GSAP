<script setup lang="ts">
import { ref } from 'vue'
import { useFadeIn } from './useFadeIn'

const props = withDefaults(defineProps<{
  tag?: string
  delay?: number
  duration?: number
}>(), {
  tag: 'div',
  delay: 0,
  duration: 0.6,
})

const el = ref<HTMLElement | null>(null)

useFadeIn(el, { delay: props.delay, duration: props.duration })
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>
