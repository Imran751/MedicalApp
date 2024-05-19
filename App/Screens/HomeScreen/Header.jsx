import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import  Colors  from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.Container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          </View>
          <View>
          <Text style={{ fontSize: 12, color: Colors.WHITE, fontFamily: "outfit" }}>Welcome, </Text>
          <Text style={{ fontSize: 20, color: Colors.WHITE, fontFamily: "outfit-medium" }}>
            {user?.fullName}
          </Text>

          </View>
          <View style={styles.bMark}>
            <FontAwesome name="bookmark" size={25} color="white" />
          </View>
        </View>
        {/* Search Bar */}
        <View style={styles.sBarContainer}>
          <TextInput placeholder="Search" style={styles.searchTextInput} />
          <FontAwesome
            name="search"
            style={styles.searchBtn}
            size={25}
            color="dodgerblue"
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bMark: {
    paddingStart: 120,
  },
  sBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  searchTextInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 15,
    fontFamily: "outfit",
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
