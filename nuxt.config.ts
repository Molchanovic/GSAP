import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  srcDir: 'src',

  dir: {
    pages: 'routes',
  },

  css: ['~/app/styles/index.scss'],

  vite: {
    plugins: [tailwindcss() as any],
  },
})
