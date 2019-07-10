import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'
import PropTypes from 'prop-types'

const SerieCard = ({ serie }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image
        source={{
          uri: serie.img
        }}
        aspectRatio={1}
        resizeMode='cover'
      />
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.cardTitle}>{serie.title}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: Dimensions.get('window').width / 2
  },
  card: {
    flex: 1,
    borderWidth: 1
  },
  cardTitleWrapper: {
    backgroundColor: 'pink',
    height: 50,
    position: 'absolute',
    bottom: 0
  },
  cardTitle: {

  }
})

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired
}

export default SerieCard
