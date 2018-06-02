import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormInput, FormLabel } from 'react-native-elements'

class XwInput extends Component {
  static defaultProps = {
    name: 'input-name'
  }
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    const { name, ...otherProps } = this.props
    return [
      <FormLabel key="xw-form-input-label">{name}</FormLabel>,
      <FormInput key="xw-form-input" {...otherProps} />
    ]
  }
}

export default XwInput