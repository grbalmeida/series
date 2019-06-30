import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert
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

  showAlert () {
    Alert.alert(
      'User not found',
      'Do you want to insert a new user?',
      [
        { text: 'Not', style: 'cancel' }, // style - only IOS
        { text: 'Yes', onPress: () => this.createUserWithEmailAndPassword() }
      ],
      { cancelable: false }
    )
  }

  tryLogin () {
    this.setState({ isLoading: true })

    const { email, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ errorCode: '' })
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          this.showAlert()
        }

        this.setState({ errorCode: error.code })
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  createUserWithEmailAndPassword () {
    const { email, password } = this.state

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ errorCode: '' })
      })
      .catch(error => {
        this.setState({
          errorCode: error.code
        })
      })
  }

  getMessageByErrorCode (errorCode) {
    const messages = {
      'auth/invalid-email': 'Invalid email',
      'auth/wrong-password': 'Incorret password',
      'auth/user-not-found': 'User not found',
      'auth/weak-password': 'Weak password',
      'auth/email-already-in-use': 'Email already exists'
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
