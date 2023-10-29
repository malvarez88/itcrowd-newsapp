import { WEATHER_URL, WEATHER_API_KEY } from "../utils/constants";

export const getWeather = async (lat, lon) => {
  try {
    const url = `${WEATHER_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
