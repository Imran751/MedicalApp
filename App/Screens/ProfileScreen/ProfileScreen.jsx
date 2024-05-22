import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";

export default function ProfileScreen() {
  const { user, signOut } = useUser();

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <Text style={styles.nameText}>{user.fullName}</Text>
        <Text style={styles.emailText}>
          {user.emailAddresses[0].emailAddress}
        </Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoHeader}>Profile Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>UserName:</Text>
          <Text style={styles.infoValue}>{user.fullName}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>
            {user.primaryPhoneNumber ? user.primaryPhoneNumber : "N/A"}
          </Text>
        </View>
        {/* Add more profile information as needed */}
      </View>
      <View style={styles.buttonSection}>
        <View
          style={[styles.buttonWrapper, { backgroundColor: Colors.PRIMARY }]}
        >
          <Button
            title="Edit Profile"
            onPress={() => {}}
            color={Colors.PRIMARY}
          />
        </View>
        <View
          style={[styles.buttonWrapper, { backgroundColor: Colors.DANGER }]}
        >
          <Button
            title="Sign Out"
            onPress={() => signOut()}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.BACKGROUND,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.TEXT,
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: Colors.SUBTEXT,
  },
  infoSection: {
    marginBottom: 30,
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.TEXT,
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.TEXT,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.SUBTEXT,
  },
  buttonSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonWrapper: {
    width: "45%",
    borderRadius: 8,
    overflow: "hidden",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
