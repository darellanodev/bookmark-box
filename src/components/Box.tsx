import React from 'react'
import Bookmark from './Bookmark'
import type { BookmarkType } from '../types'

interface BoxProps {
  box: {
    title: string
    bookmarks: BookmarkType[]
    starred?: boolean
    selectId?: string
  }
}

function filterBySelectId(bookmarks: BookmarkType[], selectId: string): BookmarkType[] {
  if (selectId === '') {
    return bookmarks
  }
  return bookmarks.filter((bookmark) => bookmark.selectId === selectId)
}
const Box: React.FC<BoxProps> = ({ box }) => {
  const filteredBookmarks =
    box.selectId !== undefined && box.selectId !== '' ? filterBySelectId(box.bookmarks, box.selectId) : box.bookmarks

  return (
    <div className="bg-gray-900 p-6 border border-solid border-white rounded inline-block">
      <h2 className="text-3xl font-bold mb-6 text-[#ddd] break-words flex items-center gap-2">
        {box.starred ? (
          <img src="/bookmark-box/svg/star.svg" alt="starred" style={{ width: '20px', height: '20px' }} />
        ) : (
          ''
        )}
        {box.title}
      </h2>
      <div className="grid gap-2">
        {filteredBookmarks.map((b: BookmarkType) => (
          <Bookmark bookmark={b} key={b.url} />
        ))}
      </div>
    </div>
  )
}

export default Box
