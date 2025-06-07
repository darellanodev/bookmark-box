import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { searchQuery } from '../src/stores/searchStore'
import { test, expect } from 'vitest'
import PageBoxes from '../src/components/PageBoxes.jsx'

test('should render the title of the Katas box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Katas/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Design box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Design/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Learning box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Learning/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Work box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Work/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Personal box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Personal/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Music box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Music/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Movies box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Movies/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Images AI box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Images AI/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the PDF readers box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /PDF readers/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Diagramming tools box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Diagramming tools/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Video box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Video/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Code box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /Code/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Git box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /^Git$/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the IA box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /^AI$/i, level: 2 })).toBeInTheDocument()
})

test('should render the title of the Tools box', () => {
  render(<PageBoxes />)
  expect(screen.getByRole('heading', { name: /^Tools$/i, level: 2 })).toBeInTheDocument()
})

test('filters boxes by search query', () => {
  act(() => {
    searchQuery.set('git')
  })
  render(<PageBoxes />)
  const filteredBoxes = screen.getAllByRole('heading', { level: 2 })
  expect(filteredBoxes.length).toBeGreaterThan(0)
  filteredBoxes.forEach((box) => expect(box.textContent?.toLowerCase()).toContain('git'))
})
