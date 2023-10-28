import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
