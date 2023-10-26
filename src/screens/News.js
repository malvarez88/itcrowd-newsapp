import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import { getTopNews } from "../api/getNews";
import { countries } from "../utils/constants";

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
      {/* <Countries /> */}
      <NewsList news={news} />
    </SafeAreaView>
  );
}

// export function Countries() {
//   return (
//     <View>
//       <FlatList
//         horizontal
//         data={countries}
//         renderItem={({ item, index }) => {
//           return <Text>hello</Text>;
//         }}
//       />
//       ;
//     </View>
//   );
// }

{
  /* <View className="px-4 py-2">
<FlatList
  data={Category}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({item, index}) => {
    return (
      <TouchableOpacity
        className={
          index == Select
            ? 'px-4 py-1  mr-3 rounded-md bg-redprimary'
            : 'px-4 py-1  mr-3 rounded-md bg-gray-200'
        }
        onPress={() => {
          setSelect(index);
          getData2(Category[index].category);
        }}>
        <Text
          className={
            index == Select
              ? 'text-white font-Regular'
              : 'text-gray-600 font-Regular'
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }}
/>
</View> */
}
