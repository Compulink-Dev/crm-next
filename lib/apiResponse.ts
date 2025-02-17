export const dynamic = "force-dynamic";
export async function getData(endpoint: string) {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`Failed to fetch /api/${endpoint}: ${response.status}`);
      return []; // Return an empty array if the fetch fails
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data for", endpoint, error);
    return []; // Return an empty array on error
  }
}
