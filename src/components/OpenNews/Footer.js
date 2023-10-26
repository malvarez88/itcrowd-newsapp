import { View, Text } from "react-native";
import React from "react";

export default function Footer(props) {
  const { author, source, url } = props;
  console.log("🚀 ~ file: Footer.js:6 ~ Footer ~ props:", props);
  return (
    <View>
      <Text>{author}</Text>
      {/* <Text>{source}</Text> */}
      <Text>{url}</Text>
    </View>
  );
}
