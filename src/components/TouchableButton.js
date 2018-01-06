import React, {
  Component
} from 'react'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import styled from 'styled-components/native'

// default button
const Button = styled.TouchableOpacity``
const ButtonView = styled.View`
  padding-top: 10
  padding-right: 15
  padding-bottom: 10
  padding-left: 15
  border-radius: 5
  background-color: #ccc
`
const ButtonText = styled.Text`
  color: #fff
  text-align: center
  font-size: 20
  letter-spacing: 2
`

// primary button
const PrimaryButton = styled(Button)
  ``
const PrimaryView = styled(ButtonView)
  `
  background-color: rgb(117,178,193)
`

const createButton = (WrapperComponent) => class extends Component {
  render() {
    const {
      text,
      onPress
    } = this.props
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
        <WrapperComponent text={text} />
      </TouchableOpacity>
    )
  }
}

// login button
const LoginChild = ({
        text
  }) => (
    <PrimaryView>
      <ButtonText>{text}</ButtonText>
    </PrimaryView>
  )
const LoginButton = createButton(LoginChild)

export default {
  Login: LoginButton
}