import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Footer(props) {
  const { author, source, url } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <View style={styles.authorContainer}>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Source: </Text>
        {/* <Text>{author}</Text> */}
        <Text style={{ color: "white" }}>{source.name}</Text>

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
    alignItems: "center",
  },
  readMore: {
    backgroundColor: "#867446",
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 4,
    borderRadius: 10,
    color: "white",
  },
});
