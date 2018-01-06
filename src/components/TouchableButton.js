import { View, Text } from 'react-native'
import styled from 'styled-components/native'

// default button
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
  font-size: 18
  letter-spacing: 2
`

// primary button
const PrimaryView = styled(ButtonView) `
  background-color: rgb(117,178,193)
`
export {
  ButtonView,
  PrimaryView,
  ButtonText,
}