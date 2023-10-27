import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Content(props) {
  const { content, description } = props;
  console.log("🚀 ~ file: Content.js:6 ~ Content ~ props:", props);
  return (
    <ScrollView style={styles.content}>
      <Text style={styles.description}>
        {description ? description : "N/A"}
      </Text>
      <Text style={styles.text}>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    display: "flex",
  },
  description: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 14,
    textAlign: "justify",
  },
  text: {
    textAlign: "justify",
    // padding: 10,
    // fontSize: 16,
  },
});
