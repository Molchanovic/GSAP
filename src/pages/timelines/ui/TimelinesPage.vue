<script setup lang="ts">
import { ref } from 'vue'
import { useTimelinesDemo } from '../model/useTimelinesDemo'

const card = ref<HTMLElement | null>(null)

const { play, reverse, restart } = useTimelinesDemo(card)
</script>

<template>
  <main :class="$style.page">
    <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>

    <header :class="$style.header">
      <span :class="$style.badge">Timelines</span>
      <h1>gsap.timeline()</h1>
    </header>

    <div :class="$style.layout">
      <div :class="$style.stage">
        <div ref="card" :class="$style.card">
          <span :class="$style.cardEyebrow">Release 2.0</span>
          <h2 :class="$style.cardTitle">Последовательные<br>анимации</h2>
          <p :class="$style.cardText">
            Timeline позволяет выстраивать цепочку твинов, управлять паузами,
            лейблами и скоростью воспроизведения.
          </p>
          <div :class="$style.cardTags">
            <span :class="$style.tag">to()</span>
            <span :class="$style.tag">from()</span>
            <span :class="$style.tag">labels</span>
            <span :class="$style.tag">stagger</span>
          </div>
          <button :class="$style.cardBtn">Подробнее</button>
        </div>
      </div>

      <div :class="$style.controls">
        <p :class="$style.controlsTitle">Управление</p>
        <div :class="$style.controlsRow">
          <button :class="[$style.ctrl, $style.ctrlPlay]" @click="play">▶ Play</button>
          <button :class="[$style.ctrl, $style.ctrlReverse]" @click="reverse">◀ Reverse</button>
          <button :class="[$style.ctrl, $style.ctrlRestart]" @click="restart">↺ Restart</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style module lang="scss">
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 120px;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 40px;
  transition: color 0.2s;

  &:hover { color: var(--accent); }
}

.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;

  h1 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }
}

.badge {
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

.layout {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--accent-bg);
  padding: 40px;
}

.card {
  max-width: 420px;
  padding: 36px;
  border: 1px solid var(--accent-border);
  border-radius: 16px;
  background: var(--bg);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cardEyebrow {
  font-size: 12px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.cardTitle {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.cardText {
  font-size: 15px;
  color: var(--text);
  line-height: 1.65;
}

.cardTags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 4px 10px;
  border-radius: 100px;
}

.cardBtn {
  cursor: pointer;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  color: #fff;
  width: fit-content;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
}

.controls {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 28px;
}

.controlsTitle {
  font-size: 13px;
  font-family: var(--mono);
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.controlsRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.ctrl {
  cursor: pointer;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-h);
  transition: border-color 0.2s, background 0.2s;

  &:hover { border-color: var(--accent-border); }
}

.ctrlPlay:hover    { background: #22c55e20; border-color: #22c55e80; color: #22c55e; }
.ctrlReverse:hover { background: #3b82f620; border-color: #3b82f680; color: #3b82f6; }
.ctrlRestart:hover { background: var(--accent-bg); border-color: var(--accent-border); color: var(--accent); }
</style>
