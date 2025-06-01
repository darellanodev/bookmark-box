import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import PageBoxes from '../src/components/PageBoxes.astro'
import type { BookmarkType, BoxType } from '../src/types'

test('should render the title of the Box Images AI', async () => {
  const container = await AstroContainer.create()

  const boxes: BoxType[] = [
    { title: 'box1', bookmarks: [{ url: 'https://codewars.com' }, { url: 'https://devdocs.io' }] },
  ]

  const result = await container.renderToString(PageBoxes, {
    props: {
      pageBoxes: {
        boxes: boxes,
      },
    },
  })

  expect(result).toContain('Images AI')
})
