import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ImageBackground,
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
const CancelText = ViewText.extend`
  position: absolute
  top: 20
  right: 20
  background-color: rgba(255, 255, 255, 0)
`

class Login extends Component {
  static navigationOptions = {
    header: false,
  }
  constructor() {
    super()
    this.state = {
      username: null,
      password: null
    }
  }
  getInputText = evt => evt.nativeEvent.text
  handleLogin = () => {
    this.passwordInput.root.blur()
    this.usernameInput.root.blur()
    this.submit()

    this.handleLinkLogin()
  }
  handleUsernameText = (text) => { 
    this.setState({
      username: text
    })
  }
  handlePasswordText = (text) => { 
    this.setState({
      password: text
    })
  }
  handleSubmitUsername = (evt) => {
    this.passwordInput.root.focus()
  }
  handleSubmitPassword = evt => {
    this.submit()
  }
  handleLinkLogin = () => { 
    this.props.navigation.goBack()
  }
  checkUserIsAvaliable = ({ username, password }) => username && password
  submit = () => { 
    console.log('login', this.state)
  }
  renderLoginButton = (BtnComponent) => (
    <LoginButton text={'登陆'}  onPress={this.handleLogin} />
  )
  renderDefaultButton = () => (
    <DefaultButton text={'登陆'} activeOpacity={1} />
  )
  render() {
    const { username, password } = this.state

    return (
      <BackgroundView
        source={{ uri: 'http://pic-cdn.35pic.com/58pic/21/78/01/50v58PIC3rP.jpg!w290' }}
      >
        <CancelText onPress={this.handleLinkLogin}>取消</CancelText>  
        <LoginCard>
          <IconInput
            placeholder={'手机号/邮箱'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            ownRef={node => this.usernameInput = node}
            onSubmitEditing={this.handleSubmitUsername}
            onChangeText={this.handleUsernameText}
            onBlur={this.handleInputBlur}
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
            onBlur={this.handleInputBlur}
          />
          <LoginButtonView>
            {this.checkUserIsAvaliable({ username, password }) ?
              this.renderLoginButton() :
              this.renderDefaultButton()
            }
          </LoginButtonView>
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