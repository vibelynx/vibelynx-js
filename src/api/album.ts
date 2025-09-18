import { Get } from "../utils/http"
import type { Album } from "../types"

export async function GetAlbum(id: string): Promise<{ album: Album, error: Error | null }> {
  const { data, error } = await Get(`/albums/${id}`)

  if (error || !data) {
    return { album: {} as Album, error }
  }

  const album: Album = {
    id: data.id,
    isrc: data.isrc,
    title: data.title,
    album: data.album,
    artists: data.artists,
    platforms: data.platforms,
    artwork: data.artwork,
    preview: data.preview,
    explicit: data.explicit,
    genre: data.genre,
    duration: data.duration,
    release_date: data.release_date,
    created_at: data.created_at,
    updated_at: data.updated_at,
  }

  return { album, error: null }
}
