// apiUtils.ts
async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    console.log(response)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
  
    return response.json() as Promise<T>;
  }
  
  export default fetchJson;