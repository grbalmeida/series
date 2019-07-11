import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class SerieDetailPage extends Component {
  render () {
    const { serie } = this.props.navigation.state.params

    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri: serie.img
          }}
        />
        <Text>SerieDetailPage</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  }
})
