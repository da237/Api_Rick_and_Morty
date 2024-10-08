import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://da237.github.io/Api-Rick-and-Morty/',
  plugins: [vue()],
})
