import { API_KEY, TOP_HEADLINES_URL, ALL_HEADLINES } from "../utils/constants";

export async function getTopNews() {
  try {
    const url = `${TOP_HEADLINES_URL}${API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAllNews(q) {
  try {
    const url = `${ALL_HEADLINES}${q}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
