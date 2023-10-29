import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCurrentLocation } from "../utils/helpers";
import { getWeather, getWeatherIcon } from "../api/getWeather";

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

  const icon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;
  const celcius = Math.floor(weather?.main.temp - 273);

  return (
    <SafeAreaView style={styles.weather}>
      {!weather ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.city}>{weather?.name}</Text>
          <Text style={{ textTransform: "uppercase" }}>
            {weather?.weather[0].description}
          </Text>
          <Image style={styles.icon} source={{ uri: icon }} />
          <Text>Current Temperature: {celcius}&#8451;</Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  weather: {
    height: "100%",
    backgroundColor: "#bfe0e2",
    display: "flex",
    alignItems: "center",
  },
  city: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
});
