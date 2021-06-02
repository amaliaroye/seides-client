import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Shared Components
import Header from './components/shared/Header'
import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import Alert from './components/shared/Alert'

// Route Components
import SignUp from './components/routes/SignUp'
import SignIn from './components/routes/SignIn'
import SignOut from './components/routes/SignOut'
import ChangePassword from './components/routes/ChangePassword'
import GamesIndex from './components/routes/GamesIndex'
import GamesShow from './components/routes/GamesShow'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })
  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }
  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <Alert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main>
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/games' render={() => (
            <GamesIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/games' render={() => (
            <GamesShow msgAlert={this.msgAlert} user={user} />
          )} />

        </main>
      </Fragment>
    )
  }
}

export default App
