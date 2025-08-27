import type { Track } from "../types"
import { Get } from "../utils/http"

export async function GetTrack(id: string): Promise<{ track: Track, error: Error | null }> {
  const { data, error } = await Get(`/tracks/${id}`)

  const track: Track = {
    id: data?.id,
    title: data?.title,
  }

  return { track, error }
}

export async function GetTracksByID(ids: string[]): Promise<{ tracks: Track[] | null, error: Error | null }> {
  let { data, error } = await Get(`/tracks?ids=${ids}`)

  let tracks: Track[] = []
  data.map((track: Track) => {
    tracks.push({
      id: track.id,
      title: track.title
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
      title: track.title
    })
  })

  return { tracks, error }
}
