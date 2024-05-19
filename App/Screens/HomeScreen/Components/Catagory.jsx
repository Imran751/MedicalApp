import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Catagory({catagoryList}) {
  return (
    <View>
      <FlatList
        data={catagoryList}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <View>
            <Image source={{ uri: item?.image }} style={styles.image} />
          </View>

        )}
      />
      
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    height:70,
    width:70,
    margin:10,
    borderRadius:20,
    marginTop:20,
  }
})