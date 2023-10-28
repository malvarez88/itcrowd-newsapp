import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Favorite from "./Favorite";

export default function NewsCard(props) {
  const { news } = props;
  const navigation = useNavigation();

  const goToNews = () => {
    navigation.navigate("OpenNews", { news });
  };

  return (
    <Pressable onPress={goToNews}>
      <View style={styles.card}>
        <Image
          source={{
            uri: news.urlToImage
              ? news.urlToImage
              : "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
          }}
          style={styles.image}
        />
        <Favorite news={news} />
        <View>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.description}>
            {news.description
              ? news.description.slice(0, 180) + "..."
              : "No description provided"}
          </Text>
          <Text style={styles.author}>
            {news.author ? news.author.slice(0, 30) + "..." : "N/A"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 350,
    backgroundColor: "#c0ad88",
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    padding: 8,
    color: "#455a31",
  },
  author: {
    fontSize: 8,
    color: "#192112",
    fontWeight: "bold",
    textAlign: "right",
  },
});
