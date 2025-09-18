import { test, expect } from "bun:test"
import { GetAlbum } from "../../src/api/album"

test("GetAlbum returns a signle album", async () => {
  const { album, error } = await GetAlbum("8030ab828ec283b7")
  expect(error).toBeNull()
  expect(album.id).toBe("8030ab828ec283b7")
})
