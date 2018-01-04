import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { images } from '../assets'
import TouchableButton from '../components/TouchableButton'

const LoginButton = TouchableButton.Login
const { width, height } = Dimensions.get('window')

const StyledView = styled.View`
  flex: 1
`

const LoginCard = styled.View`
  width: ${width - 40}
  height: 500
  background-color: rgb(245,236,236)
  opacity: 1
  position: absolute
  top: 110
`

class Login extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  handleLogin = () => {
    console.warn('login')
  }
  render() {
    return (
      <StyledView>
        <ImageBackground
          source={{ uri: 'http://pic-cdn.35pic.com/58pic/21/78/01/50v58PIC3rP.jpg!w290' }}
          style={styles.container}
        >
          <LoginCard>
            <LoginButton
              text={'登陆'}
              onPress={this.handleLogin}
            />
          </LoginCard>
        </ImageBackground>
      </StyledView>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: width,
    height: height,
    zIndex: -1,
    position: 'absolute'
  }
});
export default Login