import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default function Side() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" />
        <Drawer.Screen name="Notifications" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
