import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        client: './src/entry-client.jsx',
        server: './src/entry-server.jsx'
      },
      output: {
        dir: 'dist',
        format: 'esm'
      }
    }
  },
  ssr: {
    noExternal: ['react', 'react-dom']
  },
})
