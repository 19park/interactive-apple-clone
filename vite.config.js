import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/interactive-apple-clone/',
  plugins: [vue()],
  resolve: {
    // src 경로를 바라보는 별명 @ 를 추가한다.
    alias: [
      { find: "@", replacement: resolve(__dirname, 'src') },
    ]
  },
})
