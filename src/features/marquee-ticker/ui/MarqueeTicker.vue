<script setup lang="ts">
import { ref } from 'vue'
import { useMarqueeAnimation } from '../model/useMarqueeAnimation'

const props = withDefaults(defineProps<{
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
  pauseOnHover?: boolean
}>(), {
  direction: 'left',
  speed: 25,
  pauseOnHover: true,
})

const track = ref<HTMLElement | null>(null)

useMarqueeAnimation(track, {
  direction: props.direction,
  speed: props.speed,
  pauseOnHover: props.pauseOnHover,
})
</script>

<template>
  <div :class="$style.wrap">
    <div ref="track" :class="$style.track">
      <span
        v-for="(item, i) in [...items, ...items]"
        :key="`${item}-${i}`"
        :aria-hidden="i >= items.length ? 'true' : undefined"
        :class="$style.item"
      >
        {{ item }}
        <span :class="$style.dot" />
      </span>
    </div>
  </div>
</template>

<style module lang="scss">
.wrap {
  overflow: hidden;
  width: 100%;
}

.track {
  display: flex;
  align-items: center;
  width: max-content;
  will-change: transform;
  gap: 0;
}

.item {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--text-h);
  letter-spacing: -0.01em;
}

.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
</style>
