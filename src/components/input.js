import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

class XwInput extends Component {
  static defaultProps = {
    name: 'input-name'
  }
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    const { name, ...otherProps } = this.props
    return <Input {...otherProps} />
  }
}

export default XwInput