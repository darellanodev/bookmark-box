import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import PageBoxes from '../src/components/PageBoxes.jsx'
import '@testing-library/jest-dom'

test('should render the title of the Katas box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Katas/i)).toBeInTheDocument()
})

test('should render the title of the Video box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Video/i)).toBeInTheDocument()
})

test('should render the title of the Code box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Code/i)).toBeInTheDocument()
})

test('should render the title of the Design box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Design/i)).toBeInTheDocument()
})

test('should render the title of the Tools box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Tools/i)).toBeInTheDocument()
})

test('should render the title of the Learning box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Learning/i)).toBeInTheDocument()
})

test('should render the title of the Work box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Work/i)).toBeInTheDocument()
})

test('should render the title of the Personal box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Personal/i)).toBeInTheDocument()
})

test('should render the title of the Music box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Music/i)).toBeInTheDocument()
})

test('should render the title of the IA box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/IA/i)).toBeInTheDocument()
})

test('should render the title of the Movies box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Movies/i)).toBeInTheDocument()
})

test('should render the title of the GitHub box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/GitHub/i)).toBeInTheDocument()
})

test('should render the title of the Images AI box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Images AI/i)).toBeInTheDocument()
})

test('should render the title of the PDF readers box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/PDF readers/i)).toBeInTheDocument()
})

test('should render the title of the Git box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Git/i)).toBeInTheDocument()
})

test('should render the title of the Diagramming tools box', () => {
  render(<PageBoxes />)
  expect(screen.getByText(/Diagramming tools/i)).toBeInTheDocument()
})
