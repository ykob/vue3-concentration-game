import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-concentration-game/',
  plugins: [vue()],
  server: {
    host: true,
  },
})
