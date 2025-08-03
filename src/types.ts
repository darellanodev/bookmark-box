export interface BookmarkType {
  title?: string
  url: string
  selectIds?: string[]
}

export interface BoxType {
  title: string
  bookmarks: BookmarkType[]
  starred?: boolean
  selectId?: string
}

export interface PageBoxType {
  boxes: BoxType[]
}
