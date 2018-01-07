import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { InputView, IconView, Input } from '../styled/input'

const IconInput = (props) => (
  <InputView>
    {/* <IconView>
      <Text>1</Text>
    </IconView> */}
    <Input
      ref={props.ownRef}  
      autoCorrect={false}
      clearButtonMode={'while-editing'}
      {...props}
    />
  </InputView>
)

export {
  IconInput
}