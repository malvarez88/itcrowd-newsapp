import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserPanel from "../components/Auth/UserPanel";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserPanel /> : <LoginForm />}</View>;
}
