import React from 'react'

type BookmarkProps = {
  bookmark: {
    title?: string
    url: string
    selectId?: string
  }
}

const Bookmark: React.FC<BookmarkProps> = ({ bookmark }) => (
  <a
    href={bookmark.url}
    className="block p-2 border rounded bg-[#2D3748] hover:bg-[#4A5568] text-white no-underline break-all"
    role="link"
  >
    {bookmark.title ?? bookmark.url}
  </a>
)

export default Bookmark
