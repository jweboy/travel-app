import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity
} from 'react-native'

class TouchableImage extends Component {
  render() {
    const { onPress, ...otherProps } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
      >
        <Image {...otherProps} />
      </TouchableOpacity>
    )
  }
}

export default TouchableImage