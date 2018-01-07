import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { PrimaryView, ButtonText } from '../styled/button'
import createButton from '../hoc/createButton'

const PrimaryButton = createButton(({ text }) => (
  <PrimaryView>
    <ButtonText>{text}</ButtonText>
  </PrimaryView>
))

export {
  PrimaryButton
}