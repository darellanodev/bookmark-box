import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import Box from '../src/components/Box.astro'
import type { BookmarkType } from '../src/types'

test('should render the title of the Box and their two bookmarks', async () => {
  const container = await AstroContainer.create()

  const bookmarks: BookmarkType[] = [{ url: 'https://codewars.com' }, { url: 'https://devdocs.io' }]

  const result = await container.renderToString(Box, {
    props: {
      box: {
        title: 'Katas',
        bookmarks: bookmarks,
      },
    },
  })

  expect(result).toContain('Katas')
  expect(result).toContain('https://codewars.com')
  expect(result).toContain('https://devdocs.io')
})
