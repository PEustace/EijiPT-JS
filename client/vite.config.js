import { defineConfig } from 'vite'
import { resolve } from 'path'

const __dirname = import.meta.dirname;

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chatpage: resolve(__dirname, 'chatpage/index.html'),
        practice: resolve(__dirname, 'practice/index.html'),
        travel: resolve(__dirname, '/travel/'),
        quiz: resolve(__dirname, '/quiz/'),
      }
    }
  },
  plugins: [react()],
})
