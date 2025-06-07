import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Header from '../src/components/Header.jsx'

test('renders an input to filter boxes', () => {
  render(<Header />)

  const input = screen.getByPlaceholderText('Filter boxes')

  expect(input).toBeInTheDocument()
  expect(input).toHaveAttribute('type', 'search')
})
