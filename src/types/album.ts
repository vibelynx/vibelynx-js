export type Album = {
  id: string
  upc: string
  album_type: "single" | "album" | "compilation"
  title: string
  artists: Array<{
    id: string
    name: string
  }>
  genre: string[]
  artwork: string
  platforms: Array<{
    key: string
    name: string
    url: string
  }>
  track_count: number
  tracks: Array<{
    id: string
    isrc: string
    title: string
    artists: Array<{
      id: string
      name: string
    }>
    platforms: Array<{
      key: string
      name: string
      url: string
    }>
    preview: string
    explicit: boolean
    duration: number
  }>
  release_date: string
  record_label: string
  copyright: string
}
