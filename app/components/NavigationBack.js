import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

class NavigationBack extends Component {
  _onPress = () => {
    const { state, goBack } = this.props.navigation
    if(state.params && state.params.stopTimer) state.params.stopTimer()
    if(state.params && state.params.startTimer) state.params.startTimer()
    goBack()
  }

  render() {
    return(
      <TouchableOpacity onPress={this._onPress}>
        <Icon name="chevron-small-left" size={45} />
      </TouchableOpacity>
    )
  }
}

export default NavigationBack
