import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kevs_personal_website/', // Replace with your actual repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
