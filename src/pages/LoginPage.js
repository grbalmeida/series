import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'

import { tryLogin } from '../redux/action-creators'
import FormRow from '../components/FormRow'
import Input from '../components/Input'
import ErrorMessage from '../components/ErrorMessage'

class LoginPage extends Component {
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
    const { tryLogin } = this.props

    tryLogin({ email, password })
      .then(user => {
        if (user) {
          this.props.navigation.replace('Main')
        }

        this.setState({
          isLoading: false,
          errorCode: ''
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          errorCode: this.getMessageByErrorCode(error.code)
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
            keyboardType='email-address'
            autoCapitalize='none'
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
            message={errorCode}
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

const mapDispatchToProps = {
  tryLogin
}

export default connect(null, mapDispatchToProps)(LoginPage)
