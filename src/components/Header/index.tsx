import React from 'react';
import {StyleSheet, Image, Pressable, Platform} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export function Header() {

  const inset = useSafeAreaInsets()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <Animated.View entering={FadeIn.delay(400)} style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20}]}>
      <Pressable onPress={navigation.goBack}>
        <Image source={require('../../assets/chevron.png')} style={styles.chevron} />
      </Pressable>
      <Image source={require('../../assets/like.png')} style={styles.chevron} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 20,
    right: 20
  },
  chevron: {
    height: 44,
    width: 44
  }
});
