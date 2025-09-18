export type Album = {
  id: string
  isrc: string
  title: string
  album: {
    id: string
    title: string
  }
  artists: Array<{
    id: string
    name: string
  }>
  platforms: Array<{
    key: string
    name: string
    url: string
  }>
  artwork: string
  preview: string
  explicit: boolean
  genre: string[]
  duration: number
  release_date: string
  created_at: string
  updated_at: string
}
