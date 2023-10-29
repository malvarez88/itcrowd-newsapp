import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "../screens/Weather";

const Stack = createNativeStackNavigator();

export default function WeatherNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weather App" component={WeatherScreen} />
    </Stack.Navigator>
  );
}
