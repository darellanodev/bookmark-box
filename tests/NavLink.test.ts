import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import NavLink from '../src/components/NavLink.astro'

test('renders the href and class correctly', async () => {
  const container = await AstroContainer.create()

  const result = await container.renderToString(NavLink, {
    props: {
      href: '/about',
    },
  })

  expect(result).toContain('href="/about"')
  expect(result).toMatch(/class="mx-6/)
})
