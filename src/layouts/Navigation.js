import React, {
  Component
} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
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
import Login from './Login'

//TODO 这个文件会耦合 后期逻辑多的话 所以需要拆分 Tab 与 Navigator 两部分

// tab-navigation
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
  initialRouteName: 'User',
}
const Tab = TabNavigator(
  tabNavigatorScreen,
  tabNavigatorConfig
)



// card-navigation
const cardScreen = {
  Tab: {
    screen: Tab,
  },
  Message: {
    screen: Message
  },
}
const cardConfig = {
  mode: 'card',
  headerMode: 'float',
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  initialRouteName: 'Tab',
}
const MainCardNavigator = StackNavigator(
  cardScreen,
  cardConfig
)

// modal-navigation
const modalScreen = {
  MainCardNavigator: {
    screen: MainCardNavigator
  },
  Login: {
    screen: Login,
  },
}
const modalConfig = {
  mode: 'modal',
  headerMode: 'none'
}

const RootModalNavigator = StackNavigator(
  modalScreen,
  modalConfig,
);

class RootNavigation extends Component {
  render() {
    return (
      <RootModalNavigator />
    )
  }
}

export default RootNavigation