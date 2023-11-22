import React from 'react';
import {StyleSheet, Image, Pressable, View, Text} from 'react-native';
import {Data} from '../../data/data';
import Animated, {FadeInDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

type Props = {
  item: Data;
  index: number;
};

export function RenderItem({index, item}: Props) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable style={styles.container} onPress={() => navigation.navigate('Detail', {item: item})}>
        <Animated.Image sharedTransitionTag={item.name} style={styles.image} source={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textLocation}>{item.location}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    gap: 10,
    flexShrink: 1,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});
