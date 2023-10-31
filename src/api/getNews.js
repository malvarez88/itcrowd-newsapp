import { API_KEY, TOP_HEADLINES_URL, ALL_HEADLINES } from "../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllNews = createAsyncThunk("getAllNews", async (q) => {
  try {
    const url = `${ALL_HEADLINES}${q}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
});

export const getTopNews = createAsyncThunk("getTopNews", async () => {
  const url = `${TOP_HEADLINES_URL}${API_KEY}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
});
