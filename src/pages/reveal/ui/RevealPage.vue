<script setup lang="ts">
import { ref } from 'vue'
import { CountUp } from '@/shared/ui/CountUp'
import { useRevealDemo } from '../model/useRevealDemo'

const titleRef   = ref<HTMLElement | null>(null)
const coverRef   = ref<HTMLElement | null>(null)
const wipeRef    = ref<HTMLElement | null>(null)
const wipeMaskRef = ref<HTMLElement | null>(null)
const statsRef   = ref<HTMLElement | null>(null)

const { revealTitle, revealWipe, revealStats, revealed } = useRevealDemo({
  titleRef,
  coverRef,
  wipeRef,
  wipeMaskRef,
  statsRef,
})

const stats = [
  { value: 1200000, display: '1.2M', label: 'Active users',    suffix: '+' },
  { value: 98,      display: '98',   label: 'Satisfaction',    suffix: '%' },
  { value: 4200,    display: '$4.2', label: 'Revenue (M)',      suffix: 'B' },
  { value: 200,     display: '200',  label: 'Countries served', suffix: '+' },
]
</script>

<template>
  <NuxtLayout name="default">
    <template #badge>Reveal</template>
    <template #title>Reveal animations</template>

    <!-- 1. Clip-path text reveal -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">clip-path reveal</code>
        <p>Шторка поверх текста сдвигается через <code :class="$style.code">x: '101%'</code>, открывая заголовок</p>
      </div>

      <div :class="$style.revealStage">
        <div :class="$style.titleWrap">
          <h2 ref="titleRef" :class="$style.bigTitle">
            <span :class="$style.titleLine">We build</span>
            <span :class="$style.titleLine">experiences</span>
            <span :class="[$style.titleLine, $style.titleAccent]">that matter.</span>
          </h2>
          <div ref="coverRef" :class="$style.cover" />
        </div>
        <button :class="$style.revealBtn" @click="revealTitle">
          {{ revealed.title ? '↺ Reset' : '▶ Reveal' }}
        </button>
      </div>
    </section>

    <!-- 2. Stats counter -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">CountUp</code>
        <p>Числа анимируются от 0 через <code :class="$style.code">gsap.to</code> на объекте-счётчике с <code :class="$style.code">onUpdate</code></p>
      </div>

      <div ref="statsRef" :class="$style.stats">
        <div v-for="stat in stats" :key="stat.label" :class="$style.statItem">
          <div :class="$style.statNumber">
            <CountUp :to="stat.value" :suffix="stat.suffix" :duration="2" />
          </div>
          <p :class="$style.statLabel">{{ stat.label }}</p>
        </div>
      </div>
      <button :class="$style.revealBtn" @click="revealStats">
        {{ revealed.stats ? '↺ Reset' : '▶ Animate' }}
      </button>
    </section>

    <!-- 3. Wipe reveal -->
    <section :class="$style.section">
      <div :class="$style.sectionMeta">
        <code :class="$style.code">wipe reveal</code>
        <p>Контент открывается горизонтальной шторкой — паттерн с <code :class="$style.code">clipPath: 'inset(0 100% 0 0)'</code></p>
      </div>

      <div :class="$style.wipeStage">
        <div :class="$style.wipeOuter">
          <div ref="wipeRef" :class="$style.wipeContent">
            <div :class="$style.wipeInner">
              <span :class="$style.wipeBadge">Case Study</span>
              <h3 :class="$style.wipeTitle">Redesigning the<br>checkout flow</h3>
              <p :class="$style.wipeText">A complete overhaul that increased conversion by 34% in three weeks.</p>
              <div :class="$style.wipeMeta">
                <span>E-commerce</span>
                <span>·</span>
                <span>2024</span>
                <span>·</span>
                <span>+34% CVR</span>
              </div>
            </div>
            <div :class="$style.wipeVisual">
              <div :class="$style.wipeChart">
                <div :class="$style.wipeBar" style="height: 40%" />
                <div :class="$style.wipeBar" style="height: 65%" />
                <div :class="$style.wipeBar" style="height: 50%" />
                <div :class="$style.wipeBar" style="height: 80%" />
                <div :class="$style.wipeBar" style="height: 72%" />
                <div :class="[$style.wipeBar, $style.wipeBarAccent]" style="height: 95%" />
              </div>
            </div>
          </div>
          <div ref="wipeMaskRef" :class="$style.wipeMask" />
        </div>
        <button :class="$style.revealBtn" @click="revealWipe">
          {{ revealed.wipe ? '↺ Reset' : '▶ Reveal' }}
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<style module lang="scss">
.section {
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.sectionMeta {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 15px;
    color: var(--text);
    line-height: 1.6;
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

.revealStage {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.titleWrap {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.bigTitle {
  font-size: clamp(42px, 7vw, 88px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 0.05em;
}

.titleLine {
  display: block;
}

.titleAccent {
  color: var(--accent);
}

.cover {
  position: absolute;
  inset: 0;
  background: var(--bg);
  transform-origin: left;
}

.revealBtn {
  cursor: pointer;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  width: fit-content;
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.statItem {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 24px;
  border: 1px solid var(--border);
  border-radius: 16px;
}

.statNumber {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-h);
  line-height: 1;
}

.statLabel {
  font-size: 13px;
  color: var(--text);
}

.wipeStage {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wipeOuter {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid var(--border);
}

.wipeContent {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
  padding: 40px;
  align-items: center;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.wipeInner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wipeBadge {
  font-size: 11px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.wipeTitle {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.wipeText {
  font-size: 15px;
  color: var(--text);
  line-height: 1.65;
}

.wipeMeta {
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: var(--text);
  font-family: var(--mono);
}

.wipeVisual {
  height: 180px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.wipeChart {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 100%;
  width: 100%;
}

.wipeBar {
  flex: 1;
  border-radius: 6px 6px 0 0;
  background: var(--border);
}

.wipeBarAccent {
  background: var(--accent);
}

.wipeMask {
  position: absolute;
  inset: 0;
  background: var(--bg);
  transform-origin: right;
}
</style>
