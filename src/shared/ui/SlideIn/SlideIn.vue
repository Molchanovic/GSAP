<script setup lang="ts">
import { ref } from 'vue'
import { useSlideIn } from './useSlideIn'

const props = withDefaults(defineProps<{
  tag?: string
  from?: 'left' | 'right' | 'top' | 'bottom'
  delay?: number
  duration?: number
}>(), {
  tag: 'div',
  from: 'bottom',
  delay: 0,
  duration: 0.7,
})

const el = ref<HTMLElement | null>(null)

useSlideIn(el, { from: props.from, delay: props.delay, duration: props.duration })
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>
