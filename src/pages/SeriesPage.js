import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import SerieCard from '../components/SerieCard'
import series from '../fake-data/series.json'
import isEven from '../util'

const SeriesPage = () => (
  <View>
    <FlatList
      data={series}
      renderItem={({ item, index }) => (
        <SerieCard
          serie={item}
          isFirstColumn={isEven(index)}
        />
      )}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  </View>
)

const ListHeaderComponent = () => (
  <View style={styles.marginTop} />
)

const ListFooterComponent = () => (
  <View style={styles.marginBottom} />
)

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 5
  },
  marginBottom: {
    marginBottom: 5
  }
})

export default SeriesPage
