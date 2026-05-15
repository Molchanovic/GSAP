<script setup lang="ts">
import { ref } from 'vue'
import { useTweensDemo } from '../model/useTweensDemo'

const boxTo = ref<HTMLElement | null>(null)
const boxFrom = ref<HTMLElement | null>(null)
const boxFromTo = ref<HTMLElement | null>(null)
const boxSet = ref<HTMLElement | null>(null)

const { animateTo, animateFrom, animateFromTo, animateSet } = useTweensDemo({
  boxTo,
  boxFrom,
  boxFromTo,
  boxSet,
})
</script>

<template>
  <main :class="$style.page">
    <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>

    <header :class="$style.header">
      <span :class="$style.badge">Tweens</span>
      <h1>gsap.to / from / fromTo / set</h1>
    </header>

    <div :class="$style.grid">
      <div :class="$style.card">
        <div :class="$style.cardTrack">
          <div ref="boxTo" :class="[$style.box, $style.boxPurple]" />
        </div>
        <div :class="$style.cardBody">
          <code :class="$style.label">gsap.to</code>
          <p>Анимирует из текущего состояния <em>к</em> указанным значениям</p>
          <button :class="$style.btn" @click="animateTo">Запустить</button>
        </div>
      </div>

      <div :class="$style.card">
        <div :class="$style.cardTrack">
          <div ref="boxFrom" :class="[$style.box, $style.boxBlue]" />
        </div>
        <div :class="$style.cardBody">
          <code :class="$style.label">gsap.from</code>
          <p>Анимирует <em>от</em> указанных значений к текущему состоянию</p>
          <button :class="$style.btn" @click="animateFrom">Запустить</button>
        </div>
      </div>

      <div :class="$style.card">
        <div :class="$style.cardTrack">
          <div ref="boxFromTo" :class="[$style.box, $style.boxGreen]" />
        </div>
        <div :class="$style.cardBody">
          <code :class="$style.label">gsap.fromTo</code>
          <p>Явно задаёт <em>начало</em> и <em>конец</em> анимации</p>
          <button :class="$style.btn" @click="animateFromTo">Запустить</button>
        </div>
      </div>

      <div :class="$style.card">
        <div :class="$style.cardTrack">
          <div ref="boxSet" :class="[$style.box, $style.boxOrange]" />
        </div>
        <div :class="$style.cardBody">
          <code :class="$style.label">gsap.set</code>
          <p>Мгновенно устанавливает свойства без анимации</p>
          <button :class="$style.btn" @click="animateSet">Запустить</button>
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

  &:hover {
    color: var(--accent);
  }
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.cardTrack {
  height: 140px;
  background: var(--accent-bg);
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid var(--border);
}

.cardBody {
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 14px;
    color: var(--text);
    line-height: 1.6;

    em {
      font-style: normal;
      color: var(--accent);
    }
  }
}

.box {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  flex-shrink: 0;
}

.boxPurple { background: var(--accent); }
.boxBlue   { background: #3b82f6; }
.boxGreen  { background: #22c55e; }
.boxOrange { background: #f97316; }

.label {
  font-family: var(--mono);
  font-size: 13px;
  background: var(--accent-bg);
  color: var(--accent);
  padding: 3px 8px;
  border-radius: 6px;
  width: fit-content;
}

.btn {
  margin-top: 4px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  transition: background 0.2s;
  width: fit-content;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}
</style>
