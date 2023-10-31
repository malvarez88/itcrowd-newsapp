import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../screens/News";
import NewsViewerScreen from "../components/NewsViewer";
import { LogoTitle } from "../components/LogoTitle";

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
            backgroundColor: "#0a0905",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialParams={{ title: "Top" }}
      />
      <Stack.Screen
        name="NewsViewer"
        component={NewsViewerScreen}
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
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
