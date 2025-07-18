import React from 'react'
import Bookmark from './Bookmark'
import type { BookmarkType } from '../types'

interface BoxProps {
  box: {
    title: string
    bookmarks: BookmarkType[]
  }
}

const Box: React.FC<BoxProps> = ({ box }) => {
  return (
    <div className="bg-gray-900 p-6 border border-solid border-white rounded inline-block">
      <h2 className="text-3xl font-bold mb-6 text-[#ddd] break-words">{box.title}</h2>
      <div className="grid gap-2">
        {box.bookmarks.map((b: BookmarkType) => (
          <Bookmark bookmark={b} key={b.url} />
        ))}
      </div>
    </div>
  )
}

export default Box
