import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Box from '../src/components/Box'
import type { BookmarkType } from '../src/types'

const bookmarks: BookmarkType[] = [{ url: 'https://codewars.com' }, { url: 'https://devdocs.io' }]

test('should render the title of the Box and their two bookmarks', () => {
  const { container } = render(<Box box={{ title: 'Katas', bookmarks }} />)

  expect(container).toHaveTextContent('Katas')
  expect(container).toHaveTextContent('https://codewars.com')
  expect(container).toHaveTextContent('https://devdocs.io')
})

test('should add a star icon to mark the box as starred', () => {
  render(<Box box={{ title: 'Katas', bookmarks, starred: true }} />)

  expect(screen.getByAltText('starred')).toBeInTheDocument()
})

test('should not add a star icon when a box is not starred', () => {
  render(<Box box={{ title: 'Katas', bookmarks }} />)

  expect(screen.queryByAltText('starred')).not.toBeInTheDocument()
})
