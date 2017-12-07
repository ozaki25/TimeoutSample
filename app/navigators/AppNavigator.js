import React from 'react'
import { StackNavigator } from 'react-navigation'
import Sample1 from '../containers/Sample1'
import Sample2 from '../containers/Sample2'
import Sample3 from '../containers/Sample3'
import NavigationBack from '../components/NavigationBack'

const AppNavigator = StackNavigator({
  Sample1: { screen: Sample1 },
  Sample2: { screen: Sample2 },
  Sample3: { screen: Sample3 },
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: () =>
      cannotBackPages.includes(navigation.state.routeName) ? null : <NavigationBack navigation={navigation} />,
  })
})
const cannotBackPages = ['Sample1']

export default AppNavigator
