import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './redux/reducers'
import Router from './Router'

const store = createStore(rootReducer)

const SeriesApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default SeriesApp
