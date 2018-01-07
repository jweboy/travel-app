import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { InputView, IconView, Input } from '../styled/input'

const IconInput = (props) => (
  <InputView>
    {/* <IconView>
      <Text>1</Text>
    </IconView> */}
    <Input
      autoCorrect={false}
      {...props}
    />
  </InputView>
)

export {
  IconInput
}