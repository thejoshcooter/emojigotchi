import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PrivateRoute from './utils/privateRoute'
import * as actions from './redux/actions'

import MainMenu from './components/MainMenu'
import SplashView from './views/splash'
import AuthenticationView from './views/auth'
import DashboardView from './views/dashboard'
import GameView from './views/game'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actions.fetchUsers())
  }, [])
  
  return (
    <>
      <Route path='/' component={MainMenu} />
      <Route exact path='/' component={SplashView} />
      <Route path='/auth/:type' component={AuthenticationView} />
      <PrivateRoute path='/dashboard' component={DashboardView} />
      <PrivateRoute path='/game' component={GameView} />
    </>
  );
}

export default App;
