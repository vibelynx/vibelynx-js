import { Get } from "../utils/http"
import type { Album } from "../types"

export async function GetAlbum(id: string): Promise<{ album: Album, error: Error | null }> {
  const { data, error } = await Get(`/albums/${id}`)

  if (error || !data) {
    return { album: {} as Album, error }
  }

  const album: Album = {
    id: data.id,
    upc: data.upc,
    album_type: data.album_type,
    title: data.title,
    artists: data.artists,
    genre: data.genre,
    artwork: data.artwork,
    platforms: data.platforms,
    track_count: data.track_count,
    tracks: data.tracks,
    release_date: data.release_date,
    record_label: data.record_label,
    copyright: data.copyright,
  }

  return { album, error: null }
}
