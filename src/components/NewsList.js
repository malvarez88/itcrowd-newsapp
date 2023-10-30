import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Platform,
  Text,
} from "react-native";
import React from "react";
import NewsCard from "./NewsCard";

export default function NewsList(props) {
  const { news } = props;

  return news.length > 0 ? (
    <FlatList
      data={news}
      numColumns={1}
      renderItem={(item) => <NewsCard news={item} />}
    />
  ) : (
    <ActivityIndicator size="large" />
  );
}

const styles = StyleSheet.create({});
