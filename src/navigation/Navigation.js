import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AllNewsNavigation from "./AllNewsNavigation";
import TopNewsNavigation from "./TopNewsNavigation";
import FavoriteNewsNavigation from "./FavoriteNewsNavigation";
import WeatherNavigation from "./WeatherNavigation";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0a0905",
        },
        tabBarActiveTintColor: "#f9f7f4",
        tabBarInactiveTintColor: "#867446",
      }}
    >
      <Tab.Screen
        name="Top News"
        component={TopNewsNavigation}
        options={{
          tabBarLabel: "Top News",
          tabBarIcon: (navigation) => renderLogo(navigation),
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
      <Tab.Screen
        name="Weather"
        component={WeatherNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-marked" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderLogo(navigation) {
  const active =
    navigation.color === "#f9f7f4"
      ? require("../assets/newsapp-white2.png")
      : require("../assets/newsapp-gold.png");

  return (
    <Image
      source={active}
      style={{
        width: 40,
        height: 40,
        objectFit: "contain",
      }}
    />
  );
}
