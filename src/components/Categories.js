import { View, Pressable, StyleSheet, FlatList, Text } from "react-native";

export default function Categories(props) {
  const { loadAllnews, setSelect, Category, Select } = props;
  return (
    <View style={styles.categories}>
      <FlatList
        data={Category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={index === Select ? styles.selected : styles.notselected}
              onPress={() => {
                setSelect(index);
                loadAllnews(Category[index].category);
              }}
            >
              <Text
                style={
                  index === Select
                    ? styles.textselected
                    : styles.textnotselected
                }
              >
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: "#0a0905",
    marginBottom: 8,
    // marginTop: 8,
  },
  selected: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 4,
    borderRadius: 16,
    backgroundColor: "#c0ad88",
  },
  notselected: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 4,
    borderRadius: 16,
    backgroundColor: "#867446",
  },
  textselected: {
    color: "#fff",
    fontSize: 14,
  },
  textnotselected: {
    color: "#000",
    fontSize: 14,
  },
});
