import React from 'react'
import { View, FlatList } from 'react-native'

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
    />
  </View>
)

export default SeriesPage
