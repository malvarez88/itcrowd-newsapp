import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../screens/News";
import OpenNewsScreen from "../screens/OpenNews";
import { LogoTitle } from "../components/LogoTitle";

const Stack = createNativeStackNavigator();

export default function AllNewsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0a0905",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialParams={{ title: "All" }}
      />
      {/* <Stack.Screen
        name="OpenNews"
        component={OpenNewsScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0a0905",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
