import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import PageBoxes from '../src/components/PageBoxes.astro'

test('should render the title of the Box Katas', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Katas')
})

test('should render the title of the Box Video', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Video')
})

test('should render the title of the Box Code', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Code')
})

test('should render the title of the Box Design', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Design')
})

test('should render the title of the Box Tools', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Tools')
})

test('should render the title of the Box Learning', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Learning')
})

test('should render the title of the Box Work', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Work')
})

test('should render the title of the Box Personal', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Personal')
})

test('should render the title of the Box Music', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Music')
})

test('should render the title of the Box IA', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('IA')
})

test('should render the title of the Box Movies', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Movies')
})

test('should render the title of the Box GitHub', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('GitHub')
})

test('should render the title of the Box Images AI', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(PageBoxes)
  expect(result).toContain('Images AI')
})
