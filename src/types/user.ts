export type History = {
  id: string
  played_at: string
  type: "album" | "artist" | "playlist" | "track"
  title: string
  artwork: string
}
