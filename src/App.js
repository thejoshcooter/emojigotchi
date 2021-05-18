import React from 'react'
import { Route } from 'react-router-dom'

import MainMenu from './components/MainMenu'
import AuthenticationView from './views/auth'
import DashboardView from './views/dashboard'
import GameView from './views/game'

const App = () => {
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route path='/auth/:type' component={AuthenticationView} />
      <Route path='/dashboard' component={DashboardView} />
      <Route path='/game' component={GameView} />
    </>
  );
}

export default App;
