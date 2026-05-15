<script setup lang="ts">
import { MarqueeTicker } from '@/features/marquee-ticker'
import { MagneticButton } from '@/features/magnetic-button'

const rowA = ['GSAP', 'Vue 3', 'Nuxt', 'ScrollTrigger', 'Timeline', 'Tween', 'FSD', 'TypeScript']
const rowB = ['Motion Design', 'Web Animation', 'Parallax', 'Stagger', 'CSS Modules', 'Composables']
</script>

<template>
  <main :class="$style.page">
    <div :class="$style.topbar">
      <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>
    </div>

    <header :class="$style.header">
      <span :class="$style.badge">Effects</span>
      <h1>Production effects</h1>
    </header>

    <!-- 1. Marquee -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">Infinite Marquee</code>
        <p>Дублируем трек × 2 и анимируем <code :class="$style.code">x: -50%</code> с <code :class="$style.code">repeat: -1, ease: 'none'</code>. Пауза при <code :class="$style.code">mouseenter</code>.</p>
      </div>
      <div :class="$style.marqueeWrap">
        <MarqueeTicker :items="rowA" direction="left"  :speed="60" />
        <MarqueeTicker :items="rowB" direction="right" :speed="50" />
      </div>
    </section>

    <!-- 2. Cursor follower (демо-зона) -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">Cursor Follower</code>
        <p>
          <code :class="$style.code">gsap.quickTo</code> — самый быстрый способ двигать элемент.
          Создаётся один раз, вызывается с новым значением на каждый <code :class="$style.code">mousemove</code>.
        </p>
      </div>
      <div :class="$style.cursorZone">
        <p :class="$style.cursorHint">Двигайте мышь здесь</p>
        <div :class="$style.cursorDot" />
        <div :class="$style.cursorRing" />
        <div :class="$style.cursorGrid">
          <div v-for="i in 9" :key="i" :class="$style.cursorGridCell" />
        </div>
      </div>
      <p :class="$style.note">
        Компонент <code :class="$style.code">CursorFollower</code> подключён глобально в <code :class="$style.code">app.vue</code>
      </p>
    </section>

    <!-- 3. Magnetic buttons -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">Magnetic Button</code>
        <p>На <code :class="$style.code">mousemove</code> смещение кнопки вычисляется от её центра и передаётся в <code :class="$style.code">gsap.to</code>. На <code :class="$style.code">mouseleave</code> — elastic возврат.</p>
      </div>
      <div :class="$style.magnetRow">
        <MagneticButton>Get started →</MagneticButton>
        <MagneticButton>View work</MagneticButton>
        <MagneticButton>Contact us</MagneticButton>
      </div>
    </section>

    <!-- 4. Number ticker (одиночный) -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">Number Ticker</code>
        <p>Числа в навигации, хедерах, дашбордах — крутятся вниз как счётчик через <code :class="$style.code">gsap.to</code> + <code :class="$style.code">onUpdate</code>.</p>
      </div>
      <div :class="$style.tickerRow">
        <div v-for="num in [120, 4800, 99.9, 2500]" :key="num" :class="$style.tickerItem">
          <span :class="$style.tickerValue">{{ num.toLocaleString() }}</span>
          <span :class="$style.tickerLabel">{{ ['Users', 'Stars', 'Uptime %', 'Commits'][num === 120 ? 0 : num === 4800 ? 1 : num === 99.9 ? 2 : 3] }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style module lang="scss">
.page {
  max-width: 100%;
  padding-bottom: 120px;
}

.topbar {
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
  transition: color 0.2s;

  &:hover { color: var(--accent); }
}

.header {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px 56px;
  display: flex;
  flex-direction: column;
  gap: 16px;

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

.section {
  padding: 0 0 64px;
  margin-bottom: 64px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.sectionMeta {
  max-width: 960px;
  margin: 0 auto 32px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 15px;
    color: var(--text);
    line-height: 1.65;
    max-width: 580px;
  }
}

.code {
  font-family: var(--mono);
  font-size: 13px;
  background: var(--accent-bg);
  color: var(--accent);
  padding: 3px 8px;
  border-radius: 6px;
  width: fit-content;
}

/* ——— Marquee ——— */
.marqueeWrap {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--accent-bg);

  > * + * {
    border-top: 1px solid var(--accent-border);
    padding-top: 20px;
    margin-top: 20px;
  }
}

/* ——— Cursor demo ——— */
.cursorZone {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  height: 280px;
  position: relative;
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  cursor: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cursorHint {
  font-size: 14px;
  color: var(--text);
  font-family: var(--mono);
  z-index: 1;
  pointer-events: none;
}

.cursorDot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  pointer-events: none;
  will-change: transform;
  z-index: 10;
  transform: translate(-50%, -50%) translate(50%, calc(280px / 2));
}

.cursorRing {
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid var(--accent);
  pointer-events: none;
  will-change: transform;
  z-index: 9;
  transform: translate(-50%, -50%) translate(50%, calc(280px / 2));
}

.cursorGrid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  opacity: 0.15;
  pointer-events: none;
}

.cursorGridCell {
  border: 1px solid var(--accent);
}

.note {
  max-width: 960px;
  margin: 16px auto 0;
  padding: 0 24px;
  font-size: 13px;
  color: var(--text);
}

/* ——— Magnetic ——— */
.magnetRow {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

/* ——— Number ticker ——— */
.tickerRow {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tickerItem {
  padding: 24px 20px;
  border: 1px solid var(--border);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tickerValue {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-h);
  line-height: 1;
  font-family: var(--mono);
}

.tickerLabel {
  font-size: 13px;
  color: var(--text);
}
</style>
