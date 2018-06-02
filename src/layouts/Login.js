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
import axios from 'axios'
// import { images } from '../assets'
import { DefaultButton, PrimaryButton } from '../styledComponents/TouchableButton'
import { IconInput } from '../styledComponents/Input'
import Loading from '../components/Loading'
import { XwHeader, XwInput, XwIcon } from '../components'

// https://medium.freecodecamp.org/shared-element-transition-with-react-native-159f8bc37f50

const { width, height } = Dimensions.get('window')
const LoginButton = PrimaryButton

const BackgroundView = styled.ImageBackground`
  flex: 1;
  background-color: 'rgba(245,236,236, .35)';
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

function CencelButton() { 
  return <Text>取消</Text>
}

class Login extends Component {
  static defaultProps = {
    header: {
      centerText: '小窝欢迎你',
      rightText: '取消'
    }
  }
  // static navigationOptions = {
  //   // header: false,
  //   headerTitle: 'sdsd'
  // }
  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
      loading: false
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
    this.setState({
      loading: true
    })
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/users/signin',
      data: {}
    })
      .then(({ data, status }) => {
        console.log('data', data)
        console.log('status', status)
        setTimeout(() => { 
          this.setState({
            loading: false
          })
        }, 1000)
      })
      .catch((err) => {
        if (err.response) { 
          console.warn(err.response)
          setTimeout(() => { 
            this.setState({
              loading: false
            })
          }, 1000)
        }
      })
  }
  renderLoginButton = (BtnComponent) => (
    <LoginButton text={'登陆'}  onPress={this.handleLogin} />
  )
  renderDefaultButton = () => (
    <DefaultButton text={'登陆'} activeOpacity={1} />
  )
  render() {
    const { username, password, loading } = this.state
    const { header } = this.props
    // console.warn(loading)
    return (
      <BackgroundView>
        <XwHeader
          centerComponent={{ text: header.centerText }}
          rightComponent={<CencelButton />}
        />
        <View>
          <XwInput
            placeholder="请输入用户名"
            leftIcon={<XwIcon
              name="user"
            />}
            shake
            name="用户名"
          />
          <XwInput
            placeholder="请输入密码"
            leftIcon={<XwIcon
              name="password"
            />}
            name="密码"
          />
        </View>
        {/* <Loading visible={loading} />  
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
            {/* {this.checkUserIsAvaliable({ username, password }) ?
              this.renderLoginButton() :
              this.renderDefaultButton()
            }
            {this.renderLoginButton()}
          </LoginButtonView>
          <LinkView>
            <ViewText>忘记密码</ViewText>
            <ViewText>注册</ViewText>
          </LinkView>
          <View style={styles.child}>
            <Text>transform</Text>
          </View>
          <OtherView>
            <ViewText>其他账号登陆</ViewText>
          </OtherView>
        </LoginCard> */}
      </BackgroundView>
    )
  }
}

// const styles = StyleSheet.create({
//   child: {
//     transform: [
//       { translateX: - Dimensions.get('window').width * 0.24 },
//     ]
//   }
// })

export default Login