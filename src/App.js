import React from 'react'
import { Route } from 'react-router-dom'

import MainMenu from './components/MainMenu'
import AuthenticationView from './views/auth'
import DashboardView from './views/dashboard'

const App = () => {
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route path='/login' component={AuthenticationView} />
      <Route path='/dashboard' component={DashboardView} />
    </>
  );
}

export default App;
