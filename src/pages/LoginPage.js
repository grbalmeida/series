import React, { Component } from 'react'
import { View } from 'react-native'

import FormRow from '../components/FormRow'
import Input from '../components/Input'

export default class LoginPage extends Component {
  render () {
    return (
      <View>
        <FormRow>
          <Input
            placeholder='Email'
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder='Password'
            secureTextEntry
          />
        </FormRow>
      </View>
    )
  }
}
