import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'react-native-elements'

class XwHeader extends Component {
  static defaultProps = {
    centerComponent: {},
    rightComponent: {},
    backgroundColor: '#fff'
  }
  static propTypes = {
    centerComponent: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.element
    ]),
    rightComponent: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.element
    ]),
    backgroundColor: PropTypes.string,
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

export default XwHeader