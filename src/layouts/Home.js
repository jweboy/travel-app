import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
// import Swiper from '../components/Swiper'

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '首页',
    headerLeft: (
      <View>
        <Text>logo</Text>
      </View> 
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Message')}>
        <View>
          <Text>message</Text>
        </View>
      </TouchableOpacity>
    ),
  })
  render() {
    return (
      <View style={styles.container}>
        {/* <Swiper /> */}
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default Home