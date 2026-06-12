import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, // Questo permette di usare `describe`, `it`, `expect` senza importarli
  },
});
