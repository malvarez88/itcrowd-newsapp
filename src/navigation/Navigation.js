import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AllNewsNavigation from "./AllNewsNavigation";
import TopNewsNavigation from "./TopNewsNavigation";
import FavoriteNewsNavigation from "./FavoriteNewsNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Top News"
        component={TopNewsNavigation}
        options={{
          tabBarLabel: "Top News",
          tabBarIcon: () => renderLogo(),
        }}
      />
      <Tab.Screen
        name="All News"
        component={AllNewsNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite News"
        component={FavoriteNewsNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderLogo() {
  return (
    <Image
      source={require("../assets/newsapp.png")}
      style={{
        width: 40,
        height: 40,
        objectFit: "contain",
      }}
    />
  );
}
