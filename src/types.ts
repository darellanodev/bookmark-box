export interface BookmarkType {
  title?: string
  url: string
  selectId?: string
}

export interface BoxType {
  title: string
  bookmarks: BookmarkType[]
}

export interface PageBoxType {
  boxes: BoxType[]
}
