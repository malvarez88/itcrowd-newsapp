import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserPanel from "../components/Auth/UserPanel";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";

export default function Account() {
  const { auth } = useAuth();

  return (
    <View>
      {/* <Header /> */}
      {auth ? <UserPanel /> : <LoginForm />}
    </View>
  );
}
