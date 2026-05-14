<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../model/useScrollAnimation'
import type { ScrollAnimationConfig } from '@/shared/types/animation.types'

const props = withDefaults(defineProps<ScrollAnimationConfig & { tag?: string }>(), {
  tag: 'div',
})

const el = ref<HTMLElement | null>(null)

useScrollAnimation(el, props)
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>
