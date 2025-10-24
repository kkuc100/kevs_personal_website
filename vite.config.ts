import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/kevs_personal_website/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
