import React, {
  Component
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { images } from '../assets'
import { imagePicker } from '../config'
import TouchableImage from '../components/TouchableImage'

class User extends Component {
  static navigationOptions = {
    title: '我的'
  }
  state = {
    avatar: images.avatar
  }
  uplodaAvatar = () => {
    ImagePicker.openPicker(imagePicker.singlePhoto)
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
  checkLogin = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    const {
      avatar
    } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableImage
            source={avatar}
            style={styles.avatar}
            onPress={this.checkLogin}
          />
        </View>
        <View style={styles.main}></View>
      </View >
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