import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";

export default function Category({ categoryList }) {
  const handleCategoryPress = (category) => {
    // Handle the category press event
    console.log("Selected category:", category);
    // Add your logic here (e.g., navigation, fetching data, etc.)
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: Colors.BLACK,
          fontFamily: "outfit",
          paddingLeft: 20,
          paddingTop: 20,
        }}
      >
        Select the CATEGORY..
      </Text>
      <FlatList
        data={categoryList}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View>
              <Image source={{ uri: item?.image }} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    margin: 10,
    borderRadius: 20,
    marginTop: 20,
  },
});
