import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function NewsViewer({ route }) {
  const { url } = route.params;

  return (
    <WebView
      source={{ uri: url ? url : "https://google.com" }}
      style={{ flex: 1 }}
    />
  );
}
