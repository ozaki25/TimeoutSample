import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Sample3 extends Component {
  static navigationOptions = { title: 'サンプル3' }

  _startTimer = () => {
    this.timer = setTimeout(this._onTimeout, 5000)
    this.props.navigation.setParams({ stopTimer: this._stopTimer })
  }

  _stopTimer = () => clearTimeout(this.timer)

  _onPressButton = () => {
    this._stopTimer()
    this.props.navigation.navigate('Sample4', { startTimer: this._startTimer })
  }

  _resetNavigation = () => {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
          NavigationActions.navigate({ routeName: 'Sample1' })
      ]
    })
    this.props.navigation.dispatch(action)
  }

  _onTimeout = () => {
    Alert.alert('遅いよ', null, [{ text: 'OK', onPress: this._resetNavigation}])
  }

  componentWillMount() {
    this._startTimer()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>5秒以内に遷移して下さい</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Sample3
