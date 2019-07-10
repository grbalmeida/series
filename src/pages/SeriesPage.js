import React from 'react'
import { View, Text, FlatList } from 'react-native'

import series from '../fake-data/series.json'

const SeriesPage = () => (
  <View>
    <FlatList
      data={series}
      renderItem={({ item }) => (
        <View>
          <Text>{`${item.id} - ${item.title}`}</Text>
        </View>
      )}
      keyExtractor={item => `${item.id}`}
    />
  </View>
)

export default SeriesPage
