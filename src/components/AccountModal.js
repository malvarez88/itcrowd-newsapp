import {
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LoginForm from "./Auth/LoginForm";
import UserPanel from "./Auth/UserPanel";
import useAuth from "../hooks/useAuth";

export default function Account({ accountOpen, setAccountOpen }) {
  const { auth } = useAuth();

  return (
    <Modal visible={accountOpen} animationType={"slide"} transparent={false}>
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View>
          <Pressable
            onPress={() => setAccountOpen((prev) => !prev)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginLeft: 10,
            }}
          >
            <Icon name="window-close" size={30} color={"#fff"} />
            <Text
              style={{ color: accountOpen ? "white" : "black", fontSize: 16 }}
            >
              Close
            </Text>
          </Pressable>
        </View>
        <View style={styles.account}>
          {auth ? <UserPanel /> : <LoginForm />}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: "white",
  },
});
