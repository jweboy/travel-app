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
import { PrimaryButton } from '../styledComponents/TouchableButton'
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
  state = {
    value: null
  }
  handleLogin = () => {
    const { navigation } = this.props;
    navigation.goBack()
  }
  handleChangeText = (value) => {
    this.setState({ value })
  }
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
          />
          <IconInput
            secureTextEntry
            placeholder={'密码'}
            keyboardType={'ascii-capable'}
            returnKeyType={'done'}
            onChangeText={this.handleChangeText}
          />
          <LoginButtonView>
            <LoginButton
              text={'登陆'}
              onPress={this.handleLogin}
            />
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