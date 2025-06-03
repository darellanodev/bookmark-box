import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import Header from '../src/components/Header.astro'

test('renders an input to filter boxes', async () => {
  const container = await AstroContainer.create()

  const result = await container.renderToString(Header)

  expect(result).toContain('type="search"')
  expect(result).toContain('placeholder="Filter boxes"')
})
