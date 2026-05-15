<script setup lang="ts">
defineProps<{
  maxWidth?: string
  fullWidth?: boolean
}>()
</script>

<template>
  <div
    :class="[$style.layout, fullWidth && $style.layoutFull]"
    :style="!fullWidth ? { maxWidth: maxWidth ?? '960px' } : undefined"
  >
    <div :class="fullWidth ? $style.inner : undefined">
      <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>

      <header :class="$style.header">
        <span :class="$style.badge"><slot name="badge" /></span>
        <div :class="$style.headerRow">
          <h1><slot name="title" /></h1>
          <slot name="actions" />
        </div>
        <slot name="subtitle" />
      </header>
    </div>

    <slot />
  </div>
</template>

<style module lang="scss">
.layout {
  margin: 0 auto;
  padding: 40px 24px 120px;
}

.layoutFull {
  padding: 0 0 120px;
}

.inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 0;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 40px;
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
}

.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.badge {
  display: inline-flex;
  font-size: 12px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 5px 12px;
  border-radius: 100px;
  width: fit-content;
}

.headerRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  h1 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }
}
</style>
