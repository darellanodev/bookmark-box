import React from 'react'
import { useStore } from '@nanostores/react'
import Box from './Box'
import { boxes } from '../data/boxes'
import { searchQuery } from '../stores/searchStore'
import { selectQuery } from '../stores/selectStore'
import type { BookmarkType, BoxType } from '../types'

function filterBoxesBySelectId(boxes: BoxType[], selectId: string): BoxType[] {
  if (selectId === '') {
    return boxes
  }

  return boxes.filter((box) =>
    box.bookmarks.some((bookmark) => bookmark.selectId !== undefined && bookmark.selectId === selectId),
  )
}

export default function PageBoxes() {
  const query = useStore(searchQuery).toLowerCase()
  const selectId = useStore(selectQuery)

  let filtered: BoxType[] = boxes.filter((box) => box.title.toLowerCase().includes(query))
  filtered = filterBoxesBySelectId(filtered, selectId)

  return (
    <>
      {filtered.map((box) => (
        <Box key={box.title} box={box} />
      ))}
    </>
  )
}
