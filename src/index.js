import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Reset from './styles/Reset'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './redux/reducers'

import App from './App'

// create store
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

