import { View, Text } from "react-native";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/OpenNews/Header";
import Content from "../components/OpenNews/Content";
import Footer from "../components/OpenNews/Footer";

export default function OpenNews(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = params.news;

  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => (auth ? <Favorites id={id} /> : undefined),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          onPress={navigation.goBack}
          style={{ marginLeft: 0 }}
        />
      ),
    });
  }, [navigation, params]);

  return (
    <View>
      <Header image={urlToImage} title={title} published={publishedAt} />
      <Content description={description} content={content} />
      <Footer author={author} source={source} url={url} />
    </View>
  );
}
