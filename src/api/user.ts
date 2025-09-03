import { Get } from "../utils/http"
import { History } from "../types/user"

export async function GetUserHistory(User_id: string, session_token: string): Promise<{ history: History[], error: Error | null }> {
  const { data, error } = await Get(`/users/${User_id}/history`, session_token)

  if (error || !data) {
    return { history: {} as History[], error }
  }

  let history: History[] = []
  data.map((item: History) => {
    history.push({
      id: item.id,
      played_at: item.played_at,
      type: item.type,
      title: item.title,
      artwork: item.artwork
    })
  })

  return { history, error: null }
}
