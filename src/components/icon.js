import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

class WxIcon extends Component {
  static defaultProps = {
    name: 'font-awesome-icon'
  }
  static propTypes = {
    name: PropTypes.string,
  }
  render() {
    const { name, ...otherProps } = this.props
    return (
      <Icon
        name={name}
        {...otherProps}
      />
    )
  }
}

export default WxIcon