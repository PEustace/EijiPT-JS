import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolveConfig('/', 'index.html'),
        chatpage: resolveConfig('/', '/chatpage/index.html')
      }
    }
  },
  plugins: [react()],
})
