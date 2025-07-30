import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 10000,
    strictPort: true,
  },
  preview: {
    port: 10000,
    host: '0.0.0.0',
    allowedHosts: ['amk-agenda.onrender.com'],  // 🔥 IMPORTANT LINE!
  },
  build: {
    outDir: 'dist',
  },
})
