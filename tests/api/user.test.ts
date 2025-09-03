import { test, expect } from "bun:test"
import { GetUserHistory } from "../../src/api/user"

test("GetUserHistory returns an array of user play history", async () => {
  const { history, error } = await GetUserHistory("Fa0VHdf9LFa1pGDHU6lE9NoAY8ZqkkHg", "R1szZJlVF8iSrkC4XrWfEDC5DPN8PFBi")
  expect(error).toBeNull()
  expect(history).not.toBeNull()
})
