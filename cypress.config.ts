import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'http://localhost:5173',
  },
})