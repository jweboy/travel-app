import { StackNavigator } from 'react-navigation'
import CardNavigator from './CardNavigator'
import Login from '../layouts/Login'

const routeScreen = {
  CardNavigator: {
    screen: CardNavigator
  },
  Login: {
    screen: Login,
  },
}
const routeConfig = {
  mode: 'modal',
  headerMode: 'none'
}

export default StackNavigator(routeScreen, routeConfig);