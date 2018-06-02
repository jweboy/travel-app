import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-vector-icons/FontAwesome'

class WxIcon extends Component {
  static defaultProps = {
    type: 'font-awesome'
  }
  static propTypes = {
    type: PropTypes.string,
  }
  render() {
    const { type, ...otherProps } = this.props
    return (
      <Icon
        type={type}
        name='heartbeat'
        {...otherProps}
      />
    )
  }
}

export default WxIcon