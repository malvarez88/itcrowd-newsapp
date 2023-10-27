import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function NewsViewer({ route }) {
  const { url } = route.params;
  console.log("🚀 ~ file: NewsViewer.js:7 ~ NewsViewer ~ url:", url);
  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}
