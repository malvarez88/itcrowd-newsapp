import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Feather";
import { getCurrentLocation } from "../utils/helpers";
import { getWeather, getHourlyForecast } from "../api/getWeather";
import { getCurrentTime } from "../utils/helpers";
import HourlyForecast from "../components/HourlyForecast";

export default function Weather() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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

        const hourlyForecastResponse = await getHourlyForecast(
          location.latitude,
          location.longitude
        );
        setForecast(hourlyForecastResponse.list);
      }
    };

    fetchWeather();
  }, [location]);

  const icon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;
  const celcius = Math.floor(weather?.main.temp - 273);
  const low_temp = Math.floor(weather?.main.temp_min - 273);
  const max_temp = Math.floor(weather?.main.temp_max - 273);
  const feelsLike = Math.floor(weather?.main.feels_like - 273);

  return (
    <SafeAreaView style={styles.weather}>
      {!weather ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.city}>
            {weather?.name}, {weather?.sys.country}
          </Text>
          <Text style={{ textTransform: "uppercase", fontSize: 16 }}>
            {weather?.weather[0].description}
          </Text>
          <Image style={styles.icon} source={{ uri: icon }} />
          <Text style={styles.temperature}>{celcius}&#8451;</Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Feels like: {feelsLike}
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Icon name="temperature-low" size={20} color={"#fff"} />
              <Text style={styles.infoTemp}>{low_temp}&#8451;</Text>
            </View>
            <View style={styles.info}>
              <Icon name="temperature-high" size={20} color={"#fff"} />
              <Text style={styles.infoTemp}>{max_temp}&#8451; </Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Icon2 name="sunrise" size={20} color={"#fff"} />
              <Text style={styles.infoTemp}>
                {getCurrentTime(weather?.sys.sunrise)}
              </Text>
            </View>
            <View style={styles.info}>
              <Icon2 name="sunset" size={20} color={"#fff"} />
              <Text style={styles.infoTemp}>
                {getCurrentTime(weather?.sys.sunset)}
              </Text>
            </View>
          </View>
          <Text
            style={{
              textTransform: "uppercase",
            }}
          >
            Hourly Forecast
          </Text>
          <FlatList
            horizontal
            data={forecast}
            keyExtractor={(item) => item.dt.toString()}
            renderItem={({ item }) => <HourlyForecast item={item} />}
            showsHorizontalScrollIndicator={false}
          />
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
    // gap: 12,
  },
  city: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 150,
    height: 100,
  },
  temperature: {
    fontSize: 25,
    fontWeight: "500",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 20,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "#438e96",
    padding: 14,
    borderRadius: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  infoTemp: {
    fontSize: 18,
    color: "#fff",
  },
});
