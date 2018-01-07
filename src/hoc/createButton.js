import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

const createButton = (WrapperComponent) => class extends Component {
  static defaultProps = {
    activeOpacity: 0.75
  }
  render() {
    const { text, onPress, activeOpacity } = this.props
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <WrapperComponent text={text} />
      </TouchableOpacity>
    )
  }
}

export default createButton
 