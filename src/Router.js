import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SeriesPage from './pages/SeriesPage'
import SerieDetailPage from './pages/SerieDetailPage'

const routeConfig = {
  'Main': {
    screen: SeriesPage
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params

      return {
        title: serie.title
      }
    }
  },
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Welcome'
    }
  }
}

const stackConfig = {
  defaultNavigationOptions: {
    title: 'Series',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30
    }
  }
}

const AppNavigator = createStackNavigator(routeConfig, stackConfig)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
