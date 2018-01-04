import React, { Component } from 'react'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import styled from 'styled-components/native'

// default button
const Button = styled.TouchableOpacity``
const ButtonView = styled.View`
  padding-top: 20
  padding-right: 15
  padding-bottom: 20
  padding-left: 15
  border-radius: 5
  background-color: #ccc
`
const ButtonText = styled.Text`
  color: #fff
`

// primary button
const PrimaryButton = styled(Button) ``
const PrimaryView = styled(ButtonView) `
  background-color: rgb(117,178,193)
`

const createButton = (WrapperComponent) => class extends Component {
  render() {
    const { text, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <WrapperComponent text={text} />
      </TouchableOpacity>
    )
  }
}

// login button
const LoginChild = ({ text }) => (
  <PrimaryView>
    <ButtonText>{text}</ButtonText>
  </PrimaryView>
)
const LoginButton = createButton(LoginChild)

export default {
  Login: LoginButton
}