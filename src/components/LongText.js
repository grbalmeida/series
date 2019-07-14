import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  NativeModules,
  LayoutAnimation
} from 'react-native'
import PropTypes from 'prop-types'

NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true)

export default class LongText extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isExpanded: true
    }
  }

  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  toggleIsExpanded () {
    const { isExpanded } = this.state

    this.setState({
      isExpanded: !isExpanded
    })
  }

  render () {
    const { label = '', content = '-' } = this.props
    const { isExpanded } = this.state

    return (
      <View style={styles.line}>
        <Text style={[
          styles.cell,
          styles.label
        ]}>
          {label}
        </Text>
        <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
          <View>
            <Text style={[
              styles.cell,
              styles.content,
              isExpanded ? styles.collapsed : null
            ]}>
              {content}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

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
  },
  collapsed: {
    maxHeight: 65
  }
})

LongText.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
