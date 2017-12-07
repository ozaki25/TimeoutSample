import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class Sample1 extends Component {
  static navigationOptions = { title: 'サンプル1' }

  _onPressButton = () => this.props.navigation.navigate('Sample2')

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

export default Sample1
