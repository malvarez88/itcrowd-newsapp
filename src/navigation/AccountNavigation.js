import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
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
    </Stack.Navigator>
  );
}
