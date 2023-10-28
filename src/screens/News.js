import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import NewsList from "../components/NewsList";
import { getTopNews, getAllNews } from "../api/getNews";
import Categories from "../components/Categories";

export default function News(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const { title } = params;

  const [news, setNews] = useState([]);

  const [Select, setSelect] = useState(0);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
    {
      id: 8,
      name: "Bitcoin",
      category: "bitcoin",
    },
  ]);

  useEffect(() => {
    if (title === "Top") {
      loadTopNews();
    } else {
      loadAllnews();
    }
  }, []);

  const loadTopNews = async () => {
    try {
      const response = await getTopNews();
      setNews(response.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const loadAllnews = async (q) => {
    const response = await getAllNews(q);
    setNews(response.articles);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.newsContainer}>
      <SafeAreaView style={styles.news}>
        {title === "All" && (
          <Categories
            Category={Category}
            loadAllnews={loadAllnews}
            setSelect={setSelect}
            Select={Select}
          />
        )}
        <NewsList news={news} />
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: "#0a0905",
  },
  news: {
    //check this!!
    // backgroundColor: "#455a31",
  },
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    color: "#fff",
    fontSize: 16,
  },
});

