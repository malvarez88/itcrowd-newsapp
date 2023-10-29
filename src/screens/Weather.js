import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getCurrentLocation } from "../utils/helpers";
import { getWeather } from "../api/getWeather";

export default function Weather() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await getCurrentLocation();
      if (response.status) {
        setLocation(response.location);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
        const response = await getWeather(
          location.latitude,
          location.longitude
        );
        setWeather(response);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <View>
      <Text>Weather</Text>
    </View>
  );
}
