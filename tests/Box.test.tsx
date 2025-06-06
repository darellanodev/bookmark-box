import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import Box from '../src/components/Box'
import '@testing-library/jest-dom'
import type { BookmarkType } from '../src/types'

test('should render the title of the Box and their two bookmarks', () => {
  const bookmarks: BookmarkType[] = [{ url: 'https://codewars.com' }, { url: 'https://devdocs.io' }]

  const { container } = render(<Box box={{ title: 'Katas', bookmarks }} />)

  expect(container).toHaveTextContent('Katas')
  expect(container).toHaveTextContent('https://codewars.com')
  expect(container).toHaveTextContent('https://devdocs.io')
})
