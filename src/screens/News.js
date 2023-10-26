import { SafeAreaView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import { getTopNews } from "../api/getNews";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadTopNews();
  }, []);

  const loadTopNews = async () => {
    try {
      const response = await getTopNews();
      // const newsArray = [];
      setNews(response.articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <NewsList news={news} />
    </SafeAreaView>
  );
}
