import { test, expect } from "bun:test"
import { GetTrack, GetTracksByID, GetTracksByURL } from "../../src/api/track"

test("GetTrack returns a signle track", async () => {
  const { track, error } = await GetTrack("bc0cba17759d905b")
  expect(error).toBeNull()
  expect(track.id).toBe("bc0cba17759d905b")
})

test("GetTracksById returns an array of tracks", async () => {
  const { tracks, error } = await GetTracksByID(["bc0cba17759d905b"])
  expect(error).toBeNull()
  expect(tracks).not.toBeNull()
})
