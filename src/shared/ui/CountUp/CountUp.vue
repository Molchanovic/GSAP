<script setup lang="ts">
import { ref } from 'vue'
import { useCountUp } from './useCountUp'

const props = withDefaults(defineProps<{
  to: number
  from?: number
  duration?: number
  prefix?: string
  suffix?: string
}>(), {
  from: 0,
  duration: 1.5,
  prefix: '',
  suffix: '',
})

const displayRef = ref<HTMLElement | null>(null)

useCountUp(displayRef, { from: props.from, to: props.to, duration: props.duration })
</script>

<template>
  <span>{{ prefix }}<span ref="displayRef">{{ from }}</span>{{ suffix }}</span>
</template>
