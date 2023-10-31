import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../features/favoritesSlice";
import NewsList from "../components/NewsList";

export default function Favorites() {
  const newsFavorited = useSelector(selectFavorites);
  console.log(
    "🚀 ~ file: Favorites.js:9 ~ Favorites ~ newsFavorited:",
    newsFavorited
  );

  return (
    <>
      {newsFavorited.length === 0 ? (
        <View
          style={{
            backgroundColor: "#0a0905",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            There are no favorite news
          </Text>
        </View>
      ) : (
        <SafeAreaView style={styles.favorites}>
          <NewsList news={newsFavorited} />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  favorites: {
    backgroundColor: "#0a0905",
    height: "100%",
    display: "flex",
  },
});
