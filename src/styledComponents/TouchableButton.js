import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  ButtonView,
  PrimaryView,
  ButtonText
} from '../styled/button'
import createButton from '../hoc/createButton'

const PrimaryButton = createButton(({ text }) => (
  <PrimaryView>
    <ButtonText>{text}</ButtonText>
  </PrimaryView>
))

const DefaultButton = createButton(({ text }) => (
  <ButtonView>
    <ButtonText>{text}</ButtonText>
  </ButtonView>
))

export {
  DefaultButton,
  PrimaryButton
}