import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Reset from './styles/Reset'

import App from './App'

ReactDOM.render(
  <Router>
    <Reset />
    <App />
  </Router>,
  document.getElementById('root')
);

