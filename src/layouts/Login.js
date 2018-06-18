import React, { Component } from 'react'
import { Dimensions } from 'react-native'
// import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import toast from 'react-native-root-toast'
// import { images } from '../assets'
// import { DefaultButton, PrimaryButton } from '../styledComponents/TouchableButton'
// import { IconInput } from '../styledComponents/Input'
import Loading from '../components/Loading'
import { XwHeader, XwInput, XwIcon, XwButton, XwToast } from '../components'
import { BodyView } from '../styled/basic'
import { request } from '../util'

// https://medium.freecodecamp.org/shared-element-transition-with-react-native-159f8bc37f50

const { width, height } = Dimensions.get('window')
const timer = Symbol('timer')

const BackgroundView = styled.ImageBackground`
  flex: 1;
  background-color: 'rgba(245,236,236, .35)';
`

const LoginFormView = styled.View`
  background-color: 'rgb(255, 255, 255)';
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
  justify-content: center;
`

const CancelText = styled.Text`
  font-size: 22;
`

// const LoginFormInput = styled.XwInput`
//   height: 100%;
// `

// const LoginCard = styled.View`
//   width: ${width - 60}
//   paddingTop: 20
//   paddingRight:20
//   paddingBottom: 20
//   paddingLeft: 20
//   background-color: rgba(245,236,236, .35)
//   border-radius: 10
// `
// const LoginButtonView = styled.View`
//   margin-top: 33
//   margin-bottom: 17
// `
// const LinkView = styled.View`
//   flex-direction: row
//   justify-content: space-between
// `
// const ViewText = styled.Text`
//   color: #fff
//   font-size: 17
// `
// const OtherView = styled(LinkView) `
//   margin-top: 114
//   justify-content: center
// `
// const CancelText = ViewText.extend`
//   position: absolute
//   top: 20
//   right: 20
//   background-color: rgba(255, 255, 255, 0)
// `

function CencelButton(props) { 
  return <CancelText onPress={props.onPress}>取消</CancelText>
}

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
      loading: false,
      disabled: false,
      secureTextEntry: true
    }
    this[timer] = null
  }
  componentWillUnmount() {
    clearTimeout(this[timer])
    this[timer] = null
  }
  getInputText = evt => evt.nativeEvent.text
  // handleLogin = () => {
  //   this.passwordInput.root.blur()
  //   this.usernameInput.root.blur()
  //   this.submit()
  //   this.handleLinkLogin()
  // }
  // handleUsernameText = (text) => { 
  //   this.setState({
  //     username: text
  //   })
  // }
  // handlePasswordText = (text) => { 
  //   this.setState({
  //     password: text
  //   })
  // }
  // checkUserIsAvaliable = ({ username, password }) => username && password
  closePage = () => this.props.navigation.goBack()
  changeSecureText = () => {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry
    }))
  }
  asyncPostLogin = () => { 
    toast.show('no')
    request({
      method: 'post',
      url: '/user/signin',
      data: {
        username: 'test',
        password: '123'
      },
    })
      .then(({ data }) => { 
        // console.log(data);
        this.setState({
          loading: false
        }, () => { 
          this[timer] = setTimeout(() => { 
            this.closePage()
          }, 1000)
        })
      })
      .catch(err => { 
        console.error(err)
        this.setState({
          loading: false,
        })
      })
  }
  submitForm = () => { 
    this.setState({
      loading: true
    }, () => {
      this.setState({
        loading: false,
      })
      // this.asyncPostLogin()
    })
  }
  renderLoginButton = (BtnComponent) => (
    <LoginButton text={'登陆'}  onPress={this.handleLogin} />
  )
  renderDefaultButton = () => (
    <DefaultButton text={'登陆'} activeOpacity={1} />
  )
  render() {
    const { username, password, loading, secureTextEntry } = this.state
    const { header } = this.props
    const btnStyle = { height: 50, marginTop: 20 }
    const inputStyle = { width: '100%' }
    return (
      <BackgroundView>
        <XwToast />
        { loading && <Loading visible={loading} />  }
        <XwHeader
          center={{ text: '小窝欢迎你' }}
          rightComponent={<CencelButton onPress={this.closePage} />}
        />
        <BodyView>
          <LoginFormView>
            <XwInput
              placeholder="请输入用户名"
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              leftIcon={<XwIcon name="user" />}
              containerStyle={inputStyle}
              // name="用户名"
            />
            <XwInput
              placeholder="请输入密码"
              keyboardType="ascii-capable"
              returnKeyType="done"
              autoCorrect={false}
              leftIcon={<XwIcon name="key" />}
              rightIcon={<XwIcon name={secureTextEntry ? 'eye-slash': 'eye'} onPress={this.changeSecureText} />}
              containerStyle={inputStyle}
              secureTextEntry={secureTextEntry}
              // name="密码"
            />
            <XwButton
              title="登录"
              buttonStyle={btnStyle}
              // disabled
              onPress={this.submitForm}
            />
          </LoginFormView>
        </BodyView>
        {/* 
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

export default Login