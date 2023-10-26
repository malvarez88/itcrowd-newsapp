import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewsCard(props) {
  const { news } = props;
  const navigation = useNavigation();

  return (
    <Pressable>
      <View style={styles.card}>
        <Text style={styles.content}>{news.content}</Text>
        <Text style={styles.author}>{news.author ? news.author : "N/A"}</Text>
        <Image source={{ uri: news.urlToImage }} style={styles.image} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    backgroundColor: "grey",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    position: "relative",
  },
  content: {
    fontSize: 10,
    width: 250,
    padding: 10,
  },
  author: {
    fontSize: 10,
    position: "absolute",
    bottom: 2,
    right: 10,
  },
  image: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
