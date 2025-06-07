import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Bookmark from '../src/components/Bookmark'

test('renders title and link correctly', () => {
  render(<Bookmark bookmark={{ title: 'Astro Docs', url: 'https://docs.astro.build' }} />)

  expect(screen.getByText('Astro Docs')).toBeInTheDocument()
  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://docs.astro.build')
  expect(screen.getByRole('link')).toHaveClass('block')
})

test('renders the link without the optional title', () => {
  render(<Bookmark bookmark={{ url: 'https://www.example.com' }} />)

  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.example.com')
})
