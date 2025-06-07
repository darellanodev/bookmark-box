import React from 'react'
import { useStore } from '@nanostores/react'
import Box from './Box'
import { boxes } from '../data/boxes'
import { searchQuery } from '../stores/searchStore'

export default function PageBoxes() {
  const query = useStore(searchQuery).toLowerCase()
  const filtered = boxes.filter((box) => box.title.toLowerCase().includes(query))
  return (
    <>
      {filtered.map((box) => (
        <Box key={box.title} box={box} />
      ))}
    </>
  )
}
