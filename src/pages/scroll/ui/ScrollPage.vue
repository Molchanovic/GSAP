<script setup lang="ts">
import { ref } from 'vue'
import { useScrollDemo } from '../model/useScrollDemo'

const fadeSection = ref<HTMLElement | null>(null)
const pinSection  = ref<HTMLElement | null>(null)
const pinSticky   = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)

useScrollDemo({ fadeSection, pinSection, pinSticky, progressBar })
</script>

<template>
  <NuxtLayout name="default" :full-width="true">
    <template #badge>ScrollTrigger</template>
    <template #title>Анимации при скролле</template>
    <template #subtitle>
      <p>Скролльте вниз, чтобы увидеть триггеры</p>
    </template>

    <div ref="progressBar" :class="$style.progressBar" />

    <section ref="fadeSection" :class="$style.section">
      <div :class="$style.sectionInner">
        <span :class="$style.sectionNum">01</span>
        <h2>Fade on scroll</h2>
        <p>
          Элемент появляется при попадании в viewport.
          Базовый паттерн ScrollTrigger: <code>trigger</code>, <code>start</code>, <code>toggleActions</code>.
        </p>
        <div :class="$style.fakeParagraphs">
          <div :class="$style.fakeLine" />
          <div :class="$style.fakeLine" style="width: 80%" />
          <div :class="$style.fakeLine" style="width: 65%" />
        </div>
      </div>
    </section>

    <section ref="pinSection" :class="$style.section">
      <div ref="pinSticky" :class="$style.pinBox">
        <span :class="$style.sectionNum">02</span>
        <h2>Pin + scrub</h2>
        <p>
          Элемент прикрепляется к экрану, пока пользователь скроллит.
          Паттерн: <code>pin: true</code>, <code>scrub: 1</code>.
        </p>
        <div :class="$style.scrubTrack">
          <div :class="$style.scrubFill" />
        </div>
      </div>
    </section>

    <section :class="$style.section">
      <div :class="$style.sectionInner">
        <span :class="$style.sectionNum">03</span>
        <h2>Batch stagger</h2>
        <p>Несколько карточек появляются поочерёдно при скролле через <code>ScrollTrigger.batch</code>.</p>
        <div :class="$style.batchGrid">
          <div v-for="i in 6" :key="i" :class="$style.batchCard">
            <span :class="$style.batchNum">{{ i }}</span>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style module lang="scss">
.progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: var(--accent);
  z-index: 100;
  transform-origin: left;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border);
}

.sectionInner {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  h2 {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--text);
    line-height: 1.7;
    max-width: 560px;

    code {
      font-family: var(--mono);
      font-size: 13px;
      background: var(--accent-bg);
      color: var(--accent);
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
}

.sectionNum {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.fakeParagraphs {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fakeLine {
  height: 12px;
  border-radius: 6px;
  background: var(--border);
  width: 100%;
}

.pinBox {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  h2 {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--text);
    line-height: 1.7;
    max-width: 560px;

    code {
      font-family: var(--mono);
      font-size: 13px;
      background: var(--accent-bg);
      color: var(--accent);
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
}

.scrubTrack {
  margin-top: 16px;
  height: 6px;
  border-radius: 3px;
  background: var(--border);
  max-width: 480px;
  overflow: hidden;
}

.scrubFill {
  height: 100%;
  width: 0%;
  border-radius: 3px;
  background: var(--accent);
}

.batchGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 480px;
  margin-top: 8px;
}

.batchCard {
  aspect-ratio: 4 / 3;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--accent-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.batchNum {
  font-family: var(--mono);
  font-size: 20px;
  font-weight: 600;
  color: var(--accent);
}
</style>
