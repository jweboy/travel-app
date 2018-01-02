import React from 'react'
import { View, Text } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import Navigator from './Navigation'

const TestTab = () => (
  <View>
    <Text>lll</Text>
  </View>
)

const Drawer = DrawerNavigator({
  NavigatorTab: {
    screen: Navigator,
    navigationOptions: {
      drawer: () => ({
        label: 'Simple Tabs',
      }),
    },
  }
})

export default Drawer