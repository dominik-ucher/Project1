import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\api/, ''),
      }
    }
  },
  plugins: [react(), ssr({prerender: true})],
})
