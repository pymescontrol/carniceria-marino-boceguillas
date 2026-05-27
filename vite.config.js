import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/carniceria-marino-boceguillas/',
  server: {
    port: 3000
  }
})
