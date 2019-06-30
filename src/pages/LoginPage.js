import React, { Component } from 'react'
import { View, Button, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from '../services/firebase'

import FormRow from '../components/FormRow'
import Input from '../components/Input'

export default class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    })
  }

  tryLogin () {
    this.setState({ isLoading: true })

    const { email, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Authenticated user', user)
      })
      .catch(error => {
        console.log('User not found', error)
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  renderButton () {
    if (this.state.isLoading) {
      return <ActivityIndicator />
    }

    return (
      <Button
        title='Login'
        onPress={() => this.tryLogin()}
      />
    )
  }

  render () {
    const { email, password } = this.state

    return (
      <View style={styles.container}>
        <FormRow first>
          <Input
            placeholder='Email'
            value={email}
            onChangeText={email => this.onChangeHandler('email', email)}
          />
        </FormRow>
        <FormRow last>
          <Input
            placeholder='Password'
            value={password}
            onChangeText={password => this.onChangeHandler('password', password)}
            secureTextEntry
          />
        </FormRow>
        {this.renderButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  }
})
