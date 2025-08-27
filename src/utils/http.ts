export async function Get(endpoint: string): Promise<{ data: any, error: Error | null }> {
  const response = await fetch(
    "https://api.vibelynx.app/v1" + endpoint,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  if (!response.ok) {
    return { data: null, error: new Error(`API Error: ${response.status} ${response.statusText}`) }
  }

  const data = await response.json()

  return { data, error: null }
}
