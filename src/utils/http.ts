interface HeaderOptions {
  token?: string;
  contentType?: string;
  [key: string]: string | undefined;
}

export async function Get(
  endpoint: string,
  headerOptions?: HeaderOptions
): Promise<{ data: any, error: Error | null }> {
  const headers: Record<string, string> = {
    "Content-Type": headerOptions?.contentType || "application/json",
  }

  if (headerOptions?.token) {
    headers.Authorization = `Bearer ${headerOptions.token}`;
  }

  if (headerOptions) {
    Object.entries(headerOptions).forEach(([key, value]) => {
      if (key !== 'token' && key !== 'contentType' && value) {
        headers[key] = value
      }
    })
  }

  const response = await fetch(
    "https://api.vibelynx.app/v1" + endpoint,
    {
      method: "GET",
      headers
    }
  )

  if (!response.ok) {
    return {
      data: null,
      error: new Error(`API Error: ${response.status} ${response.statusText}`)
    }
  }

  const data = await response.json()

  return { data, error: null }
}
