import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Reset from './styles/Reset'
import GlobalStyles from './styles/GlobalStyles'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './redux/reducers'

import App from './App'

// create logger
const logger = createLogger({
  collapsed: true
})

// create store
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Reset />
      <GlobalStyles />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

