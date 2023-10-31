import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../features/favoritesSlice";

export default function UserPanel() {
  const { auth, logout } = useAuth();
  const favorites = useSelector(selectFavorites);

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome, </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
        <Image source={auth.image} style={styles.image} />
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="User Name" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorites" text={`${favorites.length} News`} />
      </View>
      <Button title="Logout" onPress={logout} style={styles.btnlogout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  image: {
    width: 100,
    height: 100,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnlogout: {
    paddingTop: 20,
  },
});
