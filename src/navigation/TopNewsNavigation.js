import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../screens/News";
import OpenNewsScreen from "../screens/OpenNews";

const Stack = createNativeStackNavigator();

export default function TopNewsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#455a31",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="OpenNews"
        component={OpenNewsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#455a31",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 170, height: 30, objectFit: "contain" }}
      source={require("../assets/newsapp-white.png")}
    />
  );
}
