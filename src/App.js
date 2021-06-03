import React, { useState, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Shared Components
import Header from './components/shared/Header'
import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import Alert from './components/shared/Alert'

// Route Components
// import Welcome from './components/routes/Welcome'
import Home from './components/routes/Home'
import NpcCreate from './components/routes/NpcCreate'
import GameIndex from './components/routes/GameIndex'
import GameShow from './components/routes/GameShow'
import SignUp from './components/routes/SignUp'
import SignIn from './components/routes/SignIn'
import SignOut from './components/routes/SignOut'
import ChangePassword from './components/routes/ChangePassword'
import KonvaTest from './components/routes/KonvaTest'

const App = () => {
  const [user, setUser] = useState(null)
  const [alerts, setAlerts] = useState([])

  // deletes one alert from alert array
  const deleteAlert = (id) => {
    // filters array of messages
    setAlerts(alerts.filter(alertToDelete => alertToDelete.id !== id))
  }

  const newAlert = ({ message, variant }) => {
    const id = uuid()
    setAlerts([...alerts, { message, variant, id }])
  }

  return (
    <Fragment>
      <Header user={user} />
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          message={alert.message}
          variant={alert.variant}
          id={alert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <main>
        <Route exact path='/' render={() => (
          <Home newAlert={newAlert} setUser={setUser} />
        )} />

        <AuthenticatedRoute user={user} path='/games' render={() => (
          <GameIndex newAlert={newAlert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/games' render={() => (
          <GameShow newAlert={newAlert} user={user} />
        )} />

        {/* <Route path='/npcs' render={() => (
            <NpcIndex newAlert={newAlert} setUser={setUser} />
          )} /> */}
        <Route path='/create-npc' render={() => (
          <NpcCreate newAlert={newAlert} setUser={setUser} />
        )} />

        <Route path='/test' render={() => (
          <KonvaTest newAlert={newAlert} setUser={setUser} />
        )} />

        <Route path='/newAlert-up' render={() => (
          <SignUp msgAlert={newAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn newAlert={newAlert} setUser={setUser} />
        )} />

        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut newAlert={newAlert} setUser={setUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword newAlert={newAlert} user={user} />
        )} />
      </main>
    </Fragment>
  )
}

export default App
