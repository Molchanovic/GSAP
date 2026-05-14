<script setup lang="ts">
defineProps<{
  tag?: string
  class?: string
}>()
</script>

<template>
  <component :is="tag ?? 'section'" v-bind="$attrs">
    <slot />
  </component>
</template>
