import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import SerieCard from '../components/SerieCard'
import series from '../fake-data/series.json'
import AddSerieCard from '../components/AddSerieCard'

const isEven = number => number % 2 === 0

const SeriesPage = props => (
  <View>
    <FlatList
      data={[...series, { isLast: true }]}
      renderItem={({ item, index }) => (
        item.isLast
          ? <AddSerieCard
            isFirstColumn={isEven(index)}
            onPress={() => props.navigation.navigate('SerieForm')}
          />
          : <SerieCard
            serie={item}
            isFirstColumn={isEven(index)}
            onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })}
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
