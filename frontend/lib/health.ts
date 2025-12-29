import { API_BASE_URL } from "./api";

export async function getHealth() {
  const res = await fetch(`${API_BASE_URL}/health`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch backend health");
  }

  return res.json();
}

