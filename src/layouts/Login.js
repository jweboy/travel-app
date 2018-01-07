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
import { DefaultButton, PrimaryButton } from '../styledComponents/TouchableButton'
import { IconInput } from '../styledComponents/Input'

const { width, height } = Dimensions.get('window')
const LoginButton = PrimaryButton

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
const LoginButtonView = styled.View`
  margin-top: 33
  margin-bottom: 17
`
const LinkView = styled.View`
  flex-direction: row
  justify-content: space-between
`
const ViewText = styled.Text`
  color: #fff
  font-size: 17
`
const OtherView = styled(LinkView) `
  margin-top: 114
  justify-content: center
`

class Login extends Component {
  static navigationOptions = {
    header: false,
  }
  constructor() {
    super()

    this.login = {
      username: null,
      password: null
    }
  }
  getInputText = evt => evt.nativeEvent.text
  handleLogin = () => {
    this.passwordInput.root.blur()
    this.usernameInput.root.blur()
    this.submit()

    this.props.navigation.goBack()
  }
  handleUsernameText = (text) => { 
    this.login.username = text
  }
  handlePasswordText = (text) => { 
    this.login.password = text
  }
  handleSubmitUsername = (evt) => {
    this.login.username = this.getInputText(evt)
    this.passwordInput.root.focus()
  }
  handleSubmitPassword = evt => {
    this.login.password = this.getInputText(evt)
    this.submit()
  }
  submit = () => { 
    console.log('login', this.login)
  }
  renderButton = () => (
    <DefaultButton
      text={'登陆'}
      onPress={this.handleLogin}
    />
  )
  render() {
    return (
      <BackgroundView
        source={{ uri: 'http://pic-cdn.35pic.com/58pic/21/78/01/50v58PIC3rP.jpg!w290' }}
      >
        <LoginCard>
          <IconInput
            placeholder={'手机号/邮箱'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            ownRef={node => this.usernameInput = node}
            onSubmitEditing={this.handleSubmitUsername}
            onChangeText={this.handleUsernameText}
          />
          <IconInput
            secureTextEntry
            placeholder={'密码'}
            keyboardType={'ascii-capable'}
            returnKeyType={'done'}
            onChangeText={this.handleChangeText}
            ownRef={node => this.passwordInput = node}
            onSubmitEditing={this.handleSubmitPassword}
            onChangeText={this.handlePasswordText}
          />
          <LoginButtonView>{this.renderButton()}</LoginButtonView>
          <LinkView>
            <ViewText>忘记密码</ViewText>
            <ViewText>注册</ViewText>
          </LinkView>
          <OtherView>
            <ViewText>其他账号登陆</ViewText>
          </OtherView>
        </LoginCard>
      </BackgroundView>
    )
  }
}

export default Login