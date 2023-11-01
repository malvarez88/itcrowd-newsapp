import { Modal, SafeAreaView, View, StyleSheet, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LoginForm from "./Auth/LoginForm";
import UserPanel from "./Auth/UserPanel";
import useAuth from "../hooks/useAuth";

export default function Account({ accountOpen, setAccountOpen }) {
  const { auth } = useAuth();

  return (
    <GestureRecognizer onSwipeDown={() => setAccountOpen((prev) => !prev)}>
      <Modal visible={accountOpen} animationType={"slide"} transparent={false}>
        <SafeAreaView style={{ backgroundColor: "black" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Icon name="gesture-swipe-down" size={30} color={"#fff"} />
            <Text
              style={{ color: accountOpen ? "white" : "black", fontSize: 16 }}
            >
              Swipe down to close
            </Text>
          </View>
          <View style={styles.account}>
            {auth ? <UserPanel /> : <LoginForm />}
          </View>
        </SafeAreaView>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: "white",
  },
});
