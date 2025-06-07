import { defineConfig } from 'vitest/config'
import { getViteConfig } from 'astro/config'

export default defineConfig(
  getViteConfig({
    test: {
      include: ['**/*.test.ts', '**/*.test.tsx'],
      exclude: ['**/node_modules/**', '**/.astro/**'],
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      globals: true,
      server: {
        deps: {
          inline: ['@astrojs/**', 'astro'],
        },
      },
    },
  }),
)
