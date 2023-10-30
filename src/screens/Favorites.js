import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../features/favoritesSlice";
import NewsList from "../components/NewsList";

export default function Favorites() {
  const newsFavorited = useSelector(selectFavorites);

  return (
    <SafeAreaView style={styles.favorites}>
      {newsFavorited.length === 0 ? (
        <Text style={{ color: "#fff", fontSize: 25 }}>
          {" "}
          There are no favorite news
        </Text>
      ) : (
        <NewsList news={newsFavorited} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  favorites: {
    backgroundColor: "#0a0905",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
