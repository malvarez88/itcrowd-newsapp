import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewsCard(props) {
  const { news } = props;
  const navigation = useNavigation();

  const goToNews = () => {
    navigation.navigate("OpenNews", { news });
  };

  return (
    <Pressable onPress={goToNews}>
      <View style={styles.card}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>
          {news.description
            ? news.description.slice(0, 180) + "..."
            : "No description provided"}
        </Text>
        <Text style={styles.author}>
          {news.author ? news.author.slice(0, 30) + "..." : "N/A"}
        </Text>
        <Image
          source={{
            uri: news.urlToImage
              ? news.urlToImage
              : "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    backgroundColor: "#aec591",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    position: "relative",
  },
  title: {
    fontSize: 12,
    width: 250,
    padding: 4,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    width: 250,
    padding: 8,
    color: "#455a31",
  },
  author: {
    fontSize: 8,
    position: "absolute",
    bottom: 4,
    right: 10,
    color: "#192112",
    fontWeight: "bold",
    textAlign: "right",
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
