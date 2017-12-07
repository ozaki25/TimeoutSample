import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Sample3 extends Component {
  static navigationOptions = { title: 'サンプル3' }

  _onPressButton = () => {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
          NavigationActions.navigate({ routeName: 'Sample1' })
      ]
    })
    this.props.navigation.dispatch(action)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>最初へ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Sample3
