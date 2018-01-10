import React from 'react'
import { View, Text } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import RootNavigator from './RootNavigator'

// const TestTab = () => (
//   <View>
//     <Text>lll</Text>
//   </View>
// )

const DrawerRoute = DrawerNavigator({
  NavigatorTab: {
    screen: RootNavigator,
    navigationOptions: {
      drawer: () => ({
        label: 'Simple Tabs',
      }),
    },
  }
})

export default DrawerRoute