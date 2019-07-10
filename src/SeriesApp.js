import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import Router from './Router'

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

const SeriesApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default SeriesApp
