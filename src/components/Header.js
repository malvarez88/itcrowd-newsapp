import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { LogoTitle } from "./LogoTitle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Account from "./AccountModal";

export default function Header() {
  const [accountOpen, setAccountOpen] = useState(false);

  const handleOpenAccount = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          width: Dimensions.get("screen").width / 2 + 67,
          padding: 6,
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <LogoTitle />
        <Pressable onPress={handleOpenAccount}>
          <Icon name="account" color={"white"} size={32} />
        </Pressable>
      </View>
      <Account accountOpen={accountOpen} setAccountOpen={setAccountOpen} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "#0a0905",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
