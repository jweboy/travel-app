import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'react-native-elements'

class XwHeader extends Component {
  static defaultProps = {
    center: {},
    centerComponent: {
      text: 'header-text',
      style: { fontSize: 22 },
    },
    backgroundColor: '#fff'
  }
  static propTypes = {
    center: PropTypes.object,
    backgroundColor: PropTypes.string,
    centerComponent: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.element,
      PropTypes.func
    ])
  }
  render() {
    const { center, centerComponent, ...otherProps } = this.props
    const centerProps = {...centerComponent, ...center }
    return (
      <Header
        centerComponent={centerProps}
        {...otherProps}
      />
    )
  }
}

export default XwHeader