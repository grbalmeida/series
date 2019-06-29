import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import FormRow from '../components/FormRow'

export default class LoginPage extends Component {
  render () {
    return (
      <View>
        <FormRow>
          <TextInput
            underlineColorAndroid='#c5c5c5'
          />
        </FormRow>
      </View>
    )
  }
}
