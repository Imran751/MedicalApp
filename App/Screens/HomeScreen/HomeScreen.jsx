import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Catagory from "./Components/Catagory"
import Slider from "./Slider";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from '../../Utils/firebaseConfig';

export default function HomeScreen() {

  const db = getFirestore(app);

  const [sliderList,setSliderList]=useState([])
  const [catagoryList,setCatagoryList]=useState([])

  useEffect (()=>{
      getsliderList()
      getCatagoryList()
  },[])

const getsliderList = async ()=> {
  setSliderList([])
  const querySnapshot = await getDocs(collection(db, "slider"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setSliderList(sliderList=>[...sliderList,doc.data()])
    });
}

const getCatagoryList = async ()=> {
  setCatagoryList([])
  const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setCatagoryList(catagoryList=>[...catagoryList,doc.data()])
    });
}

  return (
    <View>
      <Header />
      <Catagory catagoryList={catagoryList}/>
      <Slider sliderList={sliderList} />
    </View>
  );
}
