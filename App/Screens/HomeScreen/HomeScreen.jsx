import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import SmallSlider from "./Components/smallSlider";
import Slider from "./Components/Slider";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../Utils/firebaseConfig";

export default function HomeScreen() {
  const db = getFirestore(app);

  const [sliderList, setSliderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [smallSliderList, setSmallSliderList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Promise.all([
      getSliderList(),
      getCategoryList(),
      getSmallSliderList(),
    ]);
  };

  const getSliderList = async () => {
    const querySnapshot = await getDocs(collection(db, "slider"));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setSliderList(list);
  };

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setCategoryList(list);
  };

  const getSmallSliderList = async () => {
    const querySnapshot = await getDocs(collection(db, "smallSlider"));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setSmallSliderList(list);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Category categoryList={categoryList} />
      <Slider sliderList={sliderList} />
      <SmallSlider smallSliderList={smallSliderList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
