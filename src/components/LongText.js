import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const LongText = ({ label = '', content = '-' }) => (
  <View style={styles.line}>
    <Text style={[
      styles.cell,
      styles.label
    ]}>{label}</Text>
    <Text style={[styles.cell, styles.content]}>{content}</Text>
  </View>
)

const styles = StyleSheet.create({
  line: {
    paddingTop: 3,
    paddingBottom: 3
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 8
  },
  content: {
    flex: 3,
    textAlign: 'justify', // IOS
    paddingLeft: 10,
    paddingRight: 10
  }
})

LongText.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default LongText
