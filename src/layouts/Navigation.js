import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
} from 'react-navigation'
import Home from './Home'
import Destination from './Destination'
import User from './User'
import Message from './Message'

//TODO 这个文件会耦合 后期逻辑多的话 所以需要拆分 Tab 与 Navigator 两部分

const tabNavigatorScreen = {
  Home: {
    screen: Home,
  },
  Destination: {
    screen: Destination
  },
  User: {
    screen: User
  },

}

const tabNavigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
}

const Tab = TabNavigator(tabNavigatorScreen, tabNavigatorConfig)

const stackNavigatorScreen = {
  Tab: {
    screen: Tab,
  },
  Message: {
    screen: Message
  }
}
const stackNavigatorConfig = {
  mode: 'card',
  headerMode: 'float',
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  initialRouteName: 'Tab',
}
const NavNavigator = StackNavigator(stackNavigatorScreen, stackNavigatorConfig)

class Navigation extends Component {
  renderTabNavigator = () => StackNavigator(
    screens,
    conifg
  )
  render() {
    return (
      <NavNavigator />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Navigation