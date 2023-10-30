import {
  View,
  Modal,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "./OpenNews/Header";
import Content from "./OpenNews/Content";
import Footer from "./OpenNews/Footer";
import Favorite from "./Favorite";

export default function NewsModal({ news, openModal, setOpenModal }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = news;

  return (
    <>
      <Modal visible={openModal} animationType={"slide"} transparent={true}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.open}>
            <Header image={urlToImage} title={title} published={publishedAt} />
            <Content description={description} content={content} />
            <Footer
              author={author}
              source={source}
              url={url}
              setOpenModal={setOpenModal}
            />
            <Favorite news={news} />
          </View>
          <Pressable
            onPress={() => setOpenModal(!openModal)}
            style={styles.goBack}
          >
            <Icon name="arrow-left" size={24} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16 }}>Go Back</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  open: {
    backgroundColor: "#0a0905",
    height: "100%",
    position: "relative",
  },
  modal: {
    flex: 1,
    backgroundColor: "#0a0905",
    justifyContent: "flex-start",
  },
  goBack: {
    position: "absolute",
    bottom: 100,
    left: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});
