import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => (
  <TextInput
    style={styles.input}
    {...props}
  />
)

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  }
})

export default Input
