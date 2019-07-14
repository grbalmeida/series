import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const AddSerieCard = () => (
  <TouchableOpacity>
    <View style={styles.card}>
      <Text>Add Serie Card</Text>
    </View>
  </TouchableOpacity>
)

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
  firstColumn: {
    paddingLeft: 10
  },
  lastColumn: {
    paddingRight: 10
  }
})

export default AddSerieCard
