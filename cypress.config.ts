import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'http://localhost:3000',
  },
  env: {
    CYPRESS_BACKEND_API_BASE_URI: 'https://token-based-authentication-api.vercel.app',
  },
})
