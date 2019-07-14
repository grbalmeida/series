import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import PropTypes from 'prop-types'

const AddSerieCard = ({ isFirstColumn, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn
    ]}
  >
    <View style={styles.card}>
      <Image
        source={require('../../resources/add.png')}
        style={styles.image}
      />
    </View>
  </TouchableOpacity>
)

AddSerieCard.propTypes = {
  isFirstColumn: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2
  },
  card: {
    flex: 1,
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  firstColumn: {
    paddingLeft: 10
  },
  lastColumn: {
    paddingRight: 10
  }
})

export default AddSerieCard
