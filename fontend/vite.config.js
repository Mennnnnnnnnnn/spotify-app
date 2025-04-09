import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // <- Rất quan trọng! Gốc của hosting
  plugins: [react()],
})
