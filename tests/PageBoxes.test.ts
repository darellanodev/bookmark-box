import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import PageBoxes from '../src/components/PageBoxes.astro'

const renderPageBoxes = async () => {
  const container = await AstroContainer.create()
  return await container.renderToString(PageBoxes)
}

test('should render the title of the Katas box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Katas')
})

test('should render the title of the Video box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Video')
})

test('should render the title of the Code box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Code')
})

test('should render the title of the Design box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Design')
})

test('should render the title of the Tools box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Tools')
})

test('should render the title of the Learning box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Learning')
})

test('should render the title of the Work box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Work')
})

test('should render the title of the Personal box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Personal')
})

test('should render the title of the Music box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Music')
})

test('should render the title of the IA box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('IA')
})

test('should render the title of the Movies box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Movies')
})

test('should render the title of the GitHub box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('GitHub')
})

test('should render the title of the Images AI box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('Images AI')
})

test('should render the title of the PDF readers box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('PDF readers')
})

test('should render the title of the Git box', async () => {
  const result = await renderPageBoxes()
  expect(result).toContain('>Git<')
})