import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Footer(props) {
  const { author, source, url } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <View style={styles.authorContainer}>
        <Text style={{ fontWeight: "bold" }}>Author: </Text>
        <Text>{author}</Text>
        <Text>{source.name}</Text>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate("NewsViewer", {
            url: url,
          })
        }
        style={styles.readMore}
      >
        <Text style={{ color: "#fff" }}>Read More</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    position: "relative",
    bottom: 0,
  },
  authorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  readMore: {
    backgroundColor: "#58743c",
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 4,
    position: "absolute",
    top: 100,
    right: 20,
    borderRadius: 10,
  },
});
