<script setup lang="ts">
import { HeroSection } from '@/widgets/hero'
import { ScrollReveal } from '@/features/scroll-animation'
</script>

<template>
  <main>
    <HeroSection />

    <div class="content">
      <ScrollReveal tag="section" class="section">
        <h2>Слой features</h2>
        <p>
          ScrollReveal — переиспользуемое поведение из <code>features/scroll-animation</code>.
          Оборачивает любой контент и проигрывает fade-up при появлении в viewport.
        </p>
      </ScrollReveal>

      <ScrollReveal tag="section" class="section" :delay="0.1">
        <h2>Слой widgets</h2>
        <p>
          HeroSection выше — виджет из <code>widgets/hero</code>. Имеет собственный timeline
          и не зависит от конкретной страницы.
        </p>
      </ScrollReveal>

      <ScrollReveal tag="section" class="section" :delay="0.2">
        <h2>Слой shared</h2>
        <p>
          GSAP настроен один раз в <code>shared/lib/gsap</code>. Все плагины, easings и
          дефолтные конфиги хранятся там же.
        </p>
      </ScrollReveal>
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px 120px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.section {
  h2 {
    font-size: clamp(22px, 3vw, 30px);
    margin-bottom: 16px;
  }

  p {
    color: var(--text);
    line-height: 1.7;
  }

  code {
    font-family: var(--mono);
    font-size: 14px;
    background: var(--accent-bg);
    color: var(--accent);
    padding: 2px 6px;
    border-radius: 4px;
  }
}
</style>
