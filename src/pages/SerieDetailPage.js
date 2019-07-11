import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet } from 'react-native'

import Line from '../components/Line'
import LongText from '../components/LongText'

export default class SerieDetailPage extends Component {
  render () {
    const { serie } = this.props.navigation.state.params

    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: serie.img
          }}
        />
        <Line
          label='Title'
          content={serie.title}
        />
        <Line
          label='Gender'
          content={serie.gender}
        />
        <LongText
          label='Description'
          content={serie.description}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  }
})
