import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class User extends Component {
  static navigationOptions = {
    title: '我的'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>User</Text>
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

export default User