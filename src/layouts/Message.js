import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Message extends Component {
  static navigationOptions = {
    title: '消息'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Message</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Message