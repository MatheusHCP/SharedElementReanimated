import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import data from '../data/data';
import { RenderItem } from '../components/RenderItem';

export function Home(){
return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Popular Destinations</Text>
    <FlatList
      data={data}
      renderItem={({item, index}) => <RenderItem item={item} index={index}/>}
    />
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8f8ff'
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: "#323232",
    fontWeight: 'bold'
  }
})