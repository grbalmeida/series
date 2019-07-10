import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import PropTypes from 'prop-types'

const SerieCard = ({ serie }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text>{`${serie.id} - ${serie.title}`}</Text>
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
  }
})

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired
}

export default SerieCard
