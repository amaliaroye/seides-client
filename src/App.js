import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Shared Components
import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AlertMessage from './components/shared/AlertMessage'

// Route Components
import Home from './components/routes/Home'
import GameCreate from './components/routes/GameCreate'
import GameIndex from './components/routes/GameIndex'
import GamePlay from './components/routes/GamePlay'
import SignUp from './components/routes/SignUp'
import SignIn from './components/routes/SignIn'
import SignOut from './components/routes/SignOut'
import ChangePassword from './components/routes/ChangePassword'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      // filters array of messages by id from uuid
      return { alerts: state.alerts.filter(msg => msg.id !== id) }
    })
  }
  alert = ({ message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { alerts: [...state.alerts, { message, variant, id }] }
    })
  }

  render () {
    const { alerts, user } = this.state
    return (
      <Fragment>
        {alerts.map((alert) => (
          <AlertMessage
            key={alert.id}
            message={alert.message}
            variant={alert.variant}
            id={alert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main>
          <Route exact path='/' user={user} render={() => (
            <Home alert={this.alert} user={user} setUser={this.setUser} clearUser={this.clearUser} />
          )} />
          <AuthenticatedRoute user={user} path='/games/:id' render={(props) => (
            <GamePlay {...props} user={user} alert={this.alert}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/games' render={(props) => (
            <GameIndex {...props} alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-game' render={(props) => (
            <GameCreate {...props} user={user} alert={this.alert}/>
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />

          <AuthenticatedRoute path='/sign-out' user={user} render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
