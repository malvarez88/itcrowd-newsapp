import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function Header(props) {
  const { image, title, published } = props;
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={{
          uri: image
            ? image
            : "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.published}>{published.slice(0, 10)}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  published: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#58743c",
    padding: 6,
    fontSize: 10,
    color: "#fff",
  },
  titleContainer: {
    position: "absolute",
    backgroundColor: "#58743c",
    padding: 14,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});
