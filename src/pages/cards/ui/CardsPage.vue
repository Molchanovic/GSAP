<script setup lang="ts">
import { ref } from 'vue'
import { CardTilt } from '@/features/card-tilt'
import { useCardsDemo } from '../model/useCardsDemo'

const flipCardInner = ref<HTMLElement | null>(null)
const stackRef      = ref<HTMLElement | null>(null)

const { isFlipped, flipCard, spreadStack, collapseStack, isSpread } = useCardsDemo({
  flipCardInner,
  stackRef,
})

const tiltCards = [
  {
    plan: 'Starter',
    price: '$9',
    features: ['10 projects', '5 GB storage', 'Email support'],
    accent: '#6366f1',
    accentBg: 'rgba(99,102,241,0.12)',
  },
  {
    plan: 'Pro',
    price: '$29',
    features: ['Unlimited projects', '100 GB storage', 'Priority support'],
    accent: 'var(--accent)',
    accentBg: 'var(--accent-bg)',
    featured: true,
  },
  {
    plan: 'Enterprise',
    price: '$99',
    features: ['Everything in Pro', 'Custom domain', 'Dedicated manager'],
    accent: '#22c55e',
    accentBg: 'rgba(34,197,94,0.12)',
  },
]

const stackCards = [
  { icon: '💸', title: 'Payment received', value: '+$2,400', sub: '2 minutes ago' },
  { icon: '🚀', title: 'Goal reached',     value: '98%',     sub: '15 minutes ago' },
  { icon: '👥', title: 'New subscribers',  value: '+1,204',  sub: '1 hour ago' },
  { icon: '✅', title: 'Deploy complete',  value: 'v2.4.1',  sub: 'Just now' },
]
</script>

<template>
  <main :class="$style.page">
    <NuxtLink to="/" :class="$style.back">← Назад</NuxtLink>

    <header :class="$style.header">
      <span :class="$style.badge">Cards</span>
      <h1>Анимации карточек</h1>
    </header>

    <!-- 1. 3D Tilt -->
    <section :class="$style.section">
      <div :class="$style.sectionHeader">
        <code :class="$style.code">3D Tilt</code>
        <p>Карточка наклоняется за курсором мыши через <code :class="$style.code">rotateX / rotateY</code> и блик следует за позицией</p>
      </div>
      <div :class="$style.tiltRow">
        <CardTilt
          v-for="card in tiltCards"
          :key="card.plan"
          :class="[$style.tiltCard, card.featured && $style.tiltCardFeatured]"
        >
          <div :class="$style.tiltContent" :style="{ '--card-accent': card.accent, '--card-bg': card.accentBg }">
            <div :class="$style.tiltTop">
              <span :class="$style.tiltPlan">{{ card.plan }}</span>
              <span v-if="card.featured" :class="$style.tiltPopular">Popular</span>
            </div>
            <div :class="$style.tiltPrice">{{ card.price }}<span>/mo</span></div>
            <ul :class="$style.tiltFeatures">
              <li v-for="f in card.features" :key="f">{{ f }}</li>
            </ul>
            <button :class="$style.tiltBtn">Get started</button>
          </div>
        </CardTilt>
      </div>
    </section>

    <!-- 2. Flip Card -->
    <section :class="$style.section">
      <div :class="$style.sectionHeader">
        <code :class="$style.code">3D Flip</code>
        <p>Клик переворачивает карточку через <code :class="$style.code">rotateY: 180</code> с <code :class="$style.code">preserve-3d</code></p>
      </div>
      <div :class="$style.flipWrap">
        <div :class="$style.flipScene">
          <div ref="flipCardInner" :class="$style.flipCard">
            <div :class="[$style.flipFace, $style.flipFront]">
              <span :class="$style.flipIcon">🎴</span>
              <h3>Front Side</h3>
              <p>Нажмите кнопку, чтобы перевернуть</p>
            </div>
            <div :class="[$style.flipFace, $style.flipBack]">
              <span :class="$style.flipIcon">✨</span>
              <h3>Back Side</h3>
              <p>Анимация завершена через GSAP timeline</p>
            </div>
          </div>
        </div>
        <button :class="$style.flipBtn" @click="flipCard">
          {{ isFlipped ? '↺ Flip back' : '↻ Flip card' }}
        </button>
      </div>
    </section>

    <!-- 3. Card Stack -->
    <section :class="$style.section">
      <div :class="$style.sectionHeader">
        <code :class="$style.code">Card Stack</code>
        <p>Стопка карточек раскрывается через <code :class="$style.code">stagger + y/rotation</code></p>
      </div>
      <div :class="$style.stackWrap">
        <div ref="stackRef" :class="$style.stack">
          <div
            v-for="(card, i) in stackCards"
            :key="card.title"
            :class="$style.stackCard"
            :style="{ '--i': i }"
          >
            <span :class="$style.stackIcon">{{ card.icon }}</span>
            <div :class="$style.stackBody">
              <p :class="$style.stackTitle">{{ card.title }}</p>
              <p :class="$style.stackSub">{{ card.sub }}</p>
            </div>
            <span :class="$style.stackValue">{{ card.value }}</span>
          </div>
        </div>
        <div :class="$style.stackControls">
          <button :class="$style.stackBtn" @click="spreadStack">↕ Spread</button>
          <button :class="$style.stackBtn" @click="collapseStack">⊟ Collapse</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style module lang="scss">
.page {
  max-width: 1040px;
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
  margin-bottom: 56px;

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
  margin-bottom: 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
}

.sectionHeader {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    color: var(--text);
    font-size: 15px;
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

/* ——— Tilt ——— */
.tiltRow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}

.tiltCard {
  width: 100%;

  > * {
    width: 100%;
  }
}

.tiltCardFeatured .tiltContent {
  background: var(--accent-bg);
  border-color: var(--accent-border);
}

.tiltContent {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.tiltTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tiltPlan {
  font-size: 13px;
  font-weight: 600;
  font-family: var(--mono);
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.tiltPopular {
  font-size: 11px;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
  padding: 3px 9px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.tiltPrice {
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-h);
  line-height: 1;

  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--text);
  }
}

.tiltFeatures {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  li {
    font-size: 14px;
    color: var(--text);
    padding-left: 16px;
    position: relative;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 11px;
    }
  }
}

.tiltBtn {
  cursor: pointer;
  padding: 11px 0;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}

/* ——— Flip ——— */
.flipWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.flipScene {
  perspective: 800px;
}

.flipCard {
  width: 340px;
  height: 260px;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
}

.flipFace {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 20px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px;
  text-align: center;

  h3 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: var(--text);
    line-height: 1.5;
  }
}

.flipFront {
  background: var(--bg);
}

.flipBack {
  background: var(--accent-bg);
  border-color: var(--accent-border);
  transform: rotateY(180deg);
}

.flipIcon {
  font-size: 36px;
}

.flipBtn {
  cursor: pointer;
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}

/* ——— Stack ——— */
.stackWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.stack {
  position: relative;
  width: 400px;
  height: 80px;
}

.stackCard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 20px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 14px;
  transform: translateY(calc(var(--i, 0) * 8px)) scale(calc(1 - var(--i, 0) * 0.04));
  z-index: calc(4 - var(--i, 0));
}

.stackIcon {
  font-size: 22px;
  flex-shrink: 0;
}

.stackBody {
  flex: 1;
  min-width: 0;
}

.stackTitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-h);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stackSub {
  font-size: 12px;
  color: var(--text);
  margin-top: 2px;
}

.stackValue {
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
  white-space: nowrap;
}

.stackControls {
  display: flex;
  gap: 12px;
}

.stackBtn {
  cursor: pointer;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--accent-border);
  background: var(--accent-bg);
  color: var(--accent);
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: #fff;
  }
}
</style>
