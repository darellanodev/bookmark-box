import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Box from '../src/components/Box'
import type { BookmarkType } from '../src/types'

const bookmarks: BookmarkType[] = [{ url: 'https://codewars.com' }, { url: 'https://devdocs.io', selectId: '1' }]

test('should render the title of the Box and their two bookmarks', () => {
  render(<Box box={{ title: 'Katas', bookmarks }} />)

  expect(screen.getByText('Katas')).toBeInTheDocument()
  expect(screen.getByText('https://codewars.com')).toBeInTheDocument()
  expect(screen.getByText('https://devdocs.io')).toBeInTheDocument()
})

test('should add a star icon to mark the box as starred', () => {
  render(<Box box={{ title: 'Katas', bookmarks, starred: true }} />)

  expect(screen.getByAltText('starred')).toBeInTheDocument()
})

test('should not add a star icon when a box is not starred', () => {
  render(<Box box={{ title: 'Katas', bookmarks }} />)

  expect(screen.queryByAltText('starred')).not.toBeInTheDocument()
})

test('should render only the bookmark with the selectId = "1"', () => {
  render(<Box box={{ title: 'Katas', bookmarks, selectId: '1' }} />)

  expect(screen.getByText('Katas')).toBeInTheDocument()
  expect(screen.queryByText('https://codewars.com')).not.toBeInTheDocument()
  expect(screen.getByText('https://devdocs.io')).toBeInTheDocument()
})
