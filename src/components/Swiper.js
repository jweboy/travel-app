import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Swiper from 'react-native-swiper'

// https://github.com/leecade/react-native-swiper/issues/426

class OwnSwiper extends Component {
  render() {
    return (
      <View>
        <Text>Swiper</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  swiper: {
    height: 200,
    // overflow: 'hidden'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    position: 'absolute',
    top: 20
  },
})

export default OwnSwiper