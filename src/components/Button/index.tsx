import React from 'react';
import {StyleSheet,  Pressable,  useWindowDimensions, Text} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';



export function Button() {

  const {width} = useWindowDimensions();
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  return (
   <AnimatedPressable style={[styles.container, {width: width * 0.9}]} entering={FadeInDown.delay(1000)} onPress={() => console.log("booking now!")}>
    <Text style={styles.text}>Booking Now</Text>
   </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c6cce",
    padding: 22,
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
