import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import firebase from '../services/firebase'

import FormRow from '../components/FormRow'
import Input from '../components/Input'
import ErrorMessage from '../components/ErrorMessage'

export default class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errorCode: ''
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
        console.log(user)
        this.setState({ errorCode: '' })
      })
      .catch(error => {
        this.setState({ errorCode: error.code })
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  getMessageByErrorCode (errorCode) {
    const messages = {
      'auth/wrong-password': 'Incorret password',
      'auth/user-not-found': 'User not found'
    }

    return messages[errorCode] || 'Incorrect email or password'
  }

  render () {
    const { email, password, errorCode, isLoading } = this.state

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
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          <Button
            title='Login'
            onPress={() => this.tryLogin()}
          />
        }
        {!!errorCode &&
          <ErrorMessage
            message={this.getMessageByErrorCode(errorCode)}
          />
        }
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
