import type { Track } from "../types"
import { Get } from "../utils/http"

export async function GetTrack(id: string): Promise<{ track: Track, error: Error | null }> {
  const { data, error } = await Get(`/tracks/${id}`)

  if (error || !data) {
    return { track: {} as Track, error }
  }

  const track: Track = {
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

  return { track, error: null }
}

export async function GetTracksByID(ids: string[]): Promise<{ tracks: Track[] | null, error: Error | null }> {
  let { data, error } = await Get(`/tracks?ids=${ids}`)

  let tracks: Track[] = []
  data.map((track: Track) => {
    tracks.push({
      id: track.id,
      isrc: track.isrc,
      title: track.title,
      album: track.album,
      artists: track.artists,
      platforms: track.platforms,
      artwork: track.artwork,
      preview: track.preview,
      explicit: track.explicit,
      genre: track.genre,
      duration: track.duration,
      release_date: track.release_date,
      created_at: track.created_at,
      updated_at: track.updated_at
    })
  })

  return { tracks, error }
}

export async function GetTracksByURL(urls: string[]): Promise<{ tracks: Track[] | null, error: Error | null }> {
  let { data, error } = await Get(`/tracks?urls=${urls}`)

  let tracks: Track[] = []
  data.map((track: Track) => {
    tracks.push({
      id: track.id,
      isrc: track.isrc,
      title: track.title,
      album: track.album,
      artists: track.artists,
      platforms: track.platforms,
      artwork: track.artwork,
      preview: track.preview,
      explicit: track.explicit,
      genre: track.genre,
      duration: track.duration,
      release_date: track.release_date,
      created_at: track.created_at,
      updated_at: track.updated_at
    })
  })

  return { tracks, error }
}
