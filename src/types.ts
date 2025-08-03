export interface BookmarkType {
  title?: string
  url: string
  selectId?: string
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
