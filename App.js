import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { store } from "./store";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}
