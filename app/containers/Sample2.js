import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class Sample2 extends Component {
  static navigationOptions = { title: 'サンプル2' }

  _onPressButton = () => this.props.navigation.navigate('Sample3')

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>次へ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Sample2
