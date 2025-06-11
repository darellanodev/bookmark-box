import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import NavLink from '../src/components/NavLink'

test('renders the href and class correctly', () => {
  render(<NavLink href="/about">About</NavLink>)

  const linkElement = screen.getByRole('link', { name: /about/i })
  expect(linkElement).toHaveAttribute('href', '/about')
  expect(linkElement).toHaveClass('rounded-lg')
})
