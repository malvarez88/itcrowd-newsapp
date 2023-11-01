import {
  View,
  Modal,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import useAuth from "../hooks/useAuth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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

  const { auth } = useAuth();

  return (
    <>
      <GestureRecognizer onSwipeDown={() => setOpenModal((prev) => !prev)}>
        <Modal visible={openModal} animationType={"slide"} transparent={true}>
          <SafeAreaView style={styles.modal}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                name="gesture-swipe-down"
                size={30}
                color={"#fff"}
                style={{ margin: "auto" }}
              />
            </View>

            <View style={styles.open}>
              <Header
                image={urlToImage}
                title={title}
                published={publishedAt}
              />
              <Content description={description} content={content} />
              <Footer
                author={author}
                source={source}
                url={url}
                setOpenModal={setOpenModal}
              />
              {auth && <Favorite news={news} />}
            </View>
          </SafeAreaView>
        </Modal>
      </GestureRecognizer>
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
