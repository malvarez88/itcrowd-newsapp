import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../features/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Favorite(props) {
  const { news } = props;
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const newsFavorited = useSelector(selectFavorites);

  const isFavorited = newsFavorited.some(
    (item) => item.publishedAt === news.publishedAt
  );

  const handleFavorite = () => {
    if (!isPressed) {
      dispatch(addToFavorites(news));
    } else {
      dispatch(removeFromFavorites(news));
    }
    setIsPressed((prev) => !prev);
  };

  return (
    <View style={styles.favorite}>
      <Pressable onPress={handleFavorite}>
        <Icon name="heart" color={isFavorited ? "red" : "white"} size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  favorite: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#c0ad88",
    padding: 8,
    borderRadius: 20,
  },
});
