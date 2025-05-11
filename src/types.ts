export interface BookmarkType {
  title?: string
  url: string
}

export interface BoxType {
  title: string
  bookmarks: BookmarkType[]
}
