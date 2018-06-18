import React, { Component } from 'react'
import { Animated, Text } from 'react-native'

const animatedValue = Symbol('animatedValue')
const AnimatedView = Animated.View

class Toast extends Component{
  constructor() {
    super()
    this[animatedValue] = new Animated.Value(-70)
  }
  toggleAnimate(value, cb) {
    Animated.timing(
      this[animatedValue],
      {
        duration: 350,
        toValue: value,
      }
    ).start(typeof cb === 'function' && cb())
  } 
  callToast() {
    this.toggleAnimate(0, this.closeToast)
  }
  closeToast() { 
    this.toggleAnimate(-70, this.closeToast)
  }
  render() {
    return (
      <AnimatedView style={{ transform: [{ translateY: this.animatedValue }], height: 70, backgroundColor: 'green', position: 'absolute', left:0, top:0, right:0, justifyContent:  'center' }}>
        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          hello from toast
        </Text>
      </AnimatedView>
    )
  }
}