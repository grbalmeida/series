import React, { Component } from 'react'
import { View } from 'react-native'

import FormRow from '../components/FormRow'
import Input from '../components/Input'

export default class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    })
  }

  render () {
    const { email, password } = this.state

    return (
      <View>
        <FormRow>
          <Input
            placeholder='Email'
            value={email}
            onChangeText={email => this.onChangeHandler('email', email)}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder='Password'
            value={password}
            onChangeText={password => this.onChangeHandler('password', password)}
            secureTextEntry
          />
        </FormRow>
      </View>
    )
  }
}
