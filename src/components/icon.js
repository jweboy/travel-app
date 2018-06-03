import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

class WxIcon extends Component {
  static defaultProps = {
    name: 'font-awesome-icon',
    size: 20,
  }
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.number
  }
  render() {
    const { name, size, ...otherProps } = this.props
    return (
      <Icon
        name={name}
        size={size}
        {...otherProps}
      />
    )
  }
}

export default WxIcon