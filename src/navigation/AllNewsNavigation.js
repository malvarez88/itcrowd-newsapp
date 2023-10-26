import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AllNewsNavigation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}
