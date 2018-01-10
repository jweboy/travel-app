import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'

const InputView = styled.View`
  flex-direction: row
  background-color: rgb(235,235,235)
  align-items: center
  margin-bottom: 10
  border-width: 1
  border-color: #cfcfcf
  border-radius: 5
`

const IconView = styled.View`
  flex: 1
  background-color: #fff
`

const Input = styled.TextInput`
  flex: 8
  height: 55
  background-color: rgb(235,235,235)
  padding-left: 5
`

export {
  InputView,
  IconView,
  Input
}