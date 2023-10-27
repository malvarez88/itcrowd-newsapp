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
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  selected: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginRight: 4,
    borderRadius: 6,
    backgroundColor: "#102311",
  },
  notselected: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginRight: 4,
    borderRadius: 6,
    backgroundColor: "#4d9a4d",
  },
  textselected: {
    color: "#fff",
    fontSize: 12,
  },
  textnotselected: {
    color: "#000",
    fontSize: 12,
  },
});
