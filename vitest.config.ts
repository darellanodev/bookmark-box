import { defineConfig } from 'vitest/config'
import { getViteConfig } from 'astro/config'

export default defineConfig(
  getViteConfig({
    test: {
      include: ['**/*.test.ts', '**/*.test.tsx'],
      exclude: ['**/node_modules/**', '**/.astro/**'],
      server: {
        deps: {
          inline: ['@astrojs/**', 'astro'],
        },
      },
    },
  }),
)
