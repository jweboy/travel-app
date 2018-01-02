import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import TouchableImage from '../components/TouchableImage'

/**
 * react-native-image-crop-picker => https://github.com/ivpusic/react-native-image-crop-picker/blob/master/example/app.js#L109:3
 * 细节需要调整 => 参考github docs
 */

class User extends Component {
  static navigationOptions = {
    title: '我的'
  }
  state = {
    avatar: require('../assets/images/avatar.jpeg')
  }
  uplodaAvatar = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true, // 裁剪
      includeBase64: true, // base64
      includeExif: true,
      // multiple: true
    })
      .then((image) => {
        console.log(image)
        const { data, width, height, mime, path } = image
        this.setState({
          avatar: {
            uri: `data:${mime};base64,${data}`,
            width,
            height,
          },
        })
      })
      .catch(err => {
        Alert.alert(err.message || err)
      })
  }
  render() {
    const { avatar } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableImage
            source={avatar}
            style={styles.avatar}
            onPress={this.uplodaAvatar}
          />
        </View>
        <View style={styles.main}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    borderBottomWidth: 1,
    borderColor: '#cfcfcf'
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25,
    marginLeft: 10,
  },
  main: {
    flex: 7
  }
})

export default User