import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { getCurrentTime } from "../utils/helpers";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";

export default function HourlyForecast({ item }) {
  const {
    dt,
    dt_txt,
    main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
    wind: { speed },
    clouds: { all },
    pop,
    sys: { pod },
    visibility,
  } = item;

  const getCurrentTime = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const currentDate = new Date();

    const isToday =
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear();

    if (!isToday) {
      const options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      };
      return date.toLocaleDateString(undefined, options);
    }
    const options = { hour: "numeric", minute: "numeric", hour12: false };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <View style={styles.forecast}>
      <Text style={styles.text}>{getCurrentTime(dt_txt)}</Text>
      <View style={styles.info}>
        <Text style={styles.text}>{Math.floor(temp - 273)}&#8451;</Text>
      </View>

      <Text style={styles.text}>
        Feels Like: {Math.floor(feels_like - 273)}&#8451;
      </Text>
      <Text style={styles.text}>Humidity: {humidity}%</Text>
      <Text style={styles.text}>Pressure: {pressure}</Text>
      <View style={styles.info}>
        <Icon name="temperature-high" size={16} color={"#fff"} />
        <Text style={styles.text}>
          High: {Math.floor(temp_max - 273)}&#8451;
        </Text>
      </View>
      <View style={styles.info}>
        <Icon name="temperature-low" size={16} color={"#fff"} />
        <Text style={styles.text}>
          Low: {Math.floor(temp_min - 273)}&#8451;
        </Text>
      </View>
      <View style={styles.info}>
        <Icon2 name="weather-windy" size={16} color={"#fff"} />
        <Text style={styles.text}>{speed}</Text>
      </View>
      <View style={styles.info}>
        <Icon2 name="weather-cloudy" size={16} color={"#fff"} />
        <Text style={styles.text}>{all}%</Text>
      </View>
      <View style={styles.info}>
        <Icon2 name="weather-rainy" size={16} color={"#fff"} />
        <Text style={styles.text}>{pop}%</Text>
      </View>
      <View style={styles.info}>
        <Icon3 name="visibility" size={16} color={"#fff"} />
        <Text style={styles.text}>{visibility / 100}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forecast: {
    width: Dimensions.get("screen").width / 2,
    flex: 1,
    backgroundColor: "#3b757f",
    margin: 10,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#2d464c",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    gap: 4,
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
