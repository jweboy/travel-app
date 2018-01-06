import { TabNavigator, TabBarBottom } from 'react-navigation'
import Home from '../layouts/Home'
import Destination from '../layouts/Destination'
import User from '../layouts/User'

const routeScreen = {
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
const routeConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  initialRouteName: 'User',
}

export default TabNavigator(routeScreen, routeConfig)