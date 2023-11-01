import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/Favorites";
import { LogoTitle } from "../components/LogoTitle";

const Stack = createNativeStackNavigator();

export default function FavoriteNewsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={FavoritesScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerShown: false,
          headerStyle: {
            backgroundColor: "#0a0905",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialParams={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}
