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
      <View style={styles.published}>
        <Text style={styles.pub}>{published?.slice(0, 10)}</Text>
      </View>
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
    height: 350,
    objectFit: "contain",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  published: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#867446",
    padding: 6,
    borderRadius: 10,
  },
  pub: {
    fontSize: 10,
    color: "#fff",
  },
  titleContainer: {
    position: "absolute",
    backgroundColor: "#867446",
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
