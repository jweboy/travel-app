import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

const createButton = (WrapperComponent) => class extends Component {
  render() {
    const { text, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
        <WrapperComponent text={text} />
      </TouchableOpacity>
    )
  }
}

export default createButton
 