import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>nothing Booked yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#999",
  },
});
