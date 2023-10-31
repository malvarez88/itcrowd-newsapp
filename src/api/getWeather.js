import {
  WEATHER_URL,
  WEATHER_API_KEY,
  HOURLY_FORECAST_URL,
  OPEN_WEATHER,
} from "../utils/constants";

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

export const getHourlyForecast = async (lat, lon) => {
  try {
    const url = `${HOURLY_FORECAST_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
