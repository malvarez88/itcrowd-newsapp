import { View, Text } from "react-native";
import Header from "../components/OpenNews/Header";
import Content from "../components/OpenNews/Content";
import Footer from "../components/OpenNews/Footer";

export default function OpenNews(props) {
  const {
    route: { params },
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

  return (
    <View>
      <Header image={urlToImage} title={title} published={publishedAt} />
      <Content description={description} content={content} />
      <Footer author={author} source={source} url={url} />
    </View>
  );
}
