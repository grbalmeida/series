import React from 'react'
import { View, FlatList } from 'react-native'

import SerieCard from '../components/SerieCard'
import series from '../fake-data/series.json'

const SeriesPage = () => (
  <View>
    <FlatList
      data={series}
      renderItem={({ item }) => (
        <SerieCard serie={item} />
      )}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
    />
  </View>
)

export default SeriesPage
