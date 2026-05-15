<script setup lang="ts">
const categories = [
  {
    to: '/tweens',
    icon: '→',
    title: 'Tweens',
    desc: 'gsap.to / from / fromTo / set',
  },
  {
    to: '/timelines',
    icon: '⏱',
    title: 'Timelines',
    desc: 'tl.to, labels, play / reverse',
  },
  {
    to: '/scroll',
    icon: '↓',
    title: 'ScrollTrigger',
    desc: 'pin, scrub, fade on scroll',
  },
  {
    to: '/stagger',
    icon: '▦',
    title: 'Stagger',
    desc: 'stagger by index, grid, from center',
  },
  {
    to: '/text',
    icon: 'T',
    title: 'Text',
    desc: 'chars, words, lines animation',
  },
  {
    to: '/cards',
    icon: '⊞',
    title: 'Cards',
    desc: '3D tilt, flip, card stack',
  },
  {
    to: '/reveal',
    icon: '◑',
    title: 'Reveal',
    desc: 'clip-path wipe, counter stats',
  },
  {
    to: '/effects',
    icon: '∞',
    title: 'Effects',
    desc: 'marquee, cursor follower, magnetic',
  },
]
</script>

<template>
  <main :class="$style.home">
    <header :class="$style.header">
      <span :class="$style.badge">GSAP Playground</span>
      <h1 :class="$style.title">Анимации<br><em>по категориям</em></h1>
      <p :class="$style.subtitle">Практика GSAP через Feature-Sliced Design</p>
    </header>

    <nav :class="$style.nav">
      <NuxtLink
        v-for="item in categories"
        :key="item.to"
        :to="item.to"
        :class="$style.card"
      >
        <span :class="$style.cardIcon">{{ item.icon }}</span>
        <h2 :class="$style.cardTitle">{{ item.title }}</h2>
        <p :class="$style.cardDesc">{{ item.desc }}</p>
        <span :class="$style.cardArrow">→</span>
      </NuxtLink>
    </nav>
  </main>
</template>

<style module lang="scss">
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

.header {
  text-align: center;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;

  em {
    font-style: normal;
    color: var(--accent);
  }
}

.subtitle {
  color: var(--text);
  font-size: 18px;
}

.badge {
  font-size: 12px;
  font-family: var(--mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  padding: 6px 14px;
  border-radius: 100px;
}

.nav {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--bg);
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: var(--accent-border);
    box-shadow: var(--shadow);

    .cardArrow {
      color: var(--accent);
      transform: translateX(4px);
    }
  }
}

.cardIcon {
  font-family: var(--mono);
  font-size: 22px;
  color: var(--accent);
  margin-bottom: 4px;
}

.cardTitle {
  font-size: 22px;
  font-weight: 600;
}

.cardDesc {
  font-size: 14px;
  color: var(--text);
  line-height: 1.5;
}

.cardArrow {
  position: absolute;
  top: 28px;
  right: 28px;
  font-size: 18px;
  color: var(--border);
  transition: color 0.2s, transform 0.2s;
}
</style>
