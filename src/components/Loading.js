import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-spinkit'
import styled from 'styled-components/native'

const SpinnerView = styled.View`
  position: absolute
  z-index: 100
  width: 100
  height: 100
  justify-content: center
  align-items: center
  border-radius: 10
  background: rgba(0, 0, 0, .85)
  display:${props => props.display}
`

const checkVisible = (visible) => visible ? 'flex' : 'none'

const Loading = ({ visible = false }) => (
  <SpinnerView display={checkVisible(visible)}>
    <Spinner
      isVisible={visible}
      size={60}
      type={'ThreeBounce'}
      color={'#fff'}
    />
  </SpinnerView>
)

export default Loading
