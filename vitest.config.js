import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // ✅ makes `test`, `expect`, etc. available globally
    environment: 'jsdom', // ✅ needed for React Testing Library
    setupFiles: './src/setupTests.js',
  },
})