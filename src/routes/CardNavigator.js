import { StackNavigator } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import TabNavigator from './TabNavigator'
import Message from '../layouts/Message'

const routeScreen = {
  Tab: {
    screen: TabNavigator,
  },
  Message: {
    screen: Message
  },
}
const routeConfig = {
  mode: 'card',
  headerMode: 'float',
  transitionConfig: (() => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  initialRouteName: 'Tab',
}

export default StackNavigator(routeScreen, routeConfig)
