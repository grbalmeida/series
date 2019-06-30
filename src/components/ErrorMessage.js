import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.error}>{message}</Text>
  </View>
)

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginTop: 10,
    backgroundColor: '#dc143c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default ErrorMessage
