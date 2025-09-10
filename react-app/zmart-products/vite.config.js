import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zmart/',   // 👈 important: tells Vite assets live under /zmart
})
