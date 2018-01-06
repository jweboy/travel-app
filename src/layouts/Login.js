import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ImageBackground,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { images } from '../assets'
import TouchableButton from '../components/TouchableButton'

const LoginButton = TouchableButton.Login
const { width, height } = Dimensions.get('window')

const BackgroundView = styled.ImageBackground`
  flex: 1
  align-items: center
  justify-content: center
  `

const LoginCard = styled.View`
  width: ${width - 60}
  paddingTop: 20
  paddingRight:20
  paddingBottom: 20
  paddingLeft: 20
  background-color: rgba(245,236,236, .35)
  border-radius: 10
`

const FormView = styled.View`
`

const FormInput = styled.TextInput`
  height: 55
  marginBottom: 10
  border-radius: 5
  background-color: rgb(235,235,235)
`

class Login extends Component {
  static navigationOptions = {
    header: false,
  }
  // static propTypes = {
  //   prop: PropTypes
  // }
  handleLogin = () => {
    const { navigation } = this.props;
    navigation.goBack()
  }
  render() {
    return (
      <BackgroundView
        source={{ uri: 'http://pic-cdn.35pic.com/58pic/21/78/01/50v58PIC3rP.jpg!w290' }}
      >
        <LoginCard>
          <FormInput />
          <FormInput />
          <LoginButton
            text={'登陆'}
            onPress={this.handleLogin}
          />
        </LoginCard>
      </BackgroundView>
    )
  }
}

export default Login