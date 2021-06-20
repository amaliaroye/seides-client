import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import GlobalFonts from './fonts/fonts'

// Shared Components
import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AlertMessage from './components/shared/AlertMessage'
import Toaster from './components/shared/Toaster'

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
      toasts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  removeToast = (id) => {
    this.setState((state) => {
      // filters array of messages by id from uuid
      return { toasts: state.toasts.filter(msg => msg.id !== id) }
    })
  }

  makeToast = ({ message, theme }) => {
    const id = uuid()
    console.log('toast!', message, theme)
    this.setState((state) => {
      return { toasts: [...state.toasts, { message, theme, id }] }
    })
  }

  render () {
    const { toasts, user } = this.state
    return (
      <Fragment>

        <GlobalFonts />

        <main>
          <Route exact path='/' user={user} render={() => (
            <Home
              toast={this.makeToast}
              user={user}
              setUser={this.setUser}
              clearUser={this.clearUser}
            />
          )} />

          <AuthenticatedRoute user={user}
            path='/games/:id' render={(props) => (
              <GamePlay {...props}
                user={user}
                toast={this.makeToast}/>
            )} />

          <AuthenticatedRoute user={user} exact path='/games' render={(props) => (
            <GameIndex {...props} toast={this.makeToast} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-game' render={(props) => (
            <GameCreate {...props} user={user} toast={this.makeToast}/>
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp toast={this.makeToast} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn toast={this.makeToast} setUser={this.setUser} />
          )} />

          <AuthenticatedRoute path='/sign-out' user={user} render={() => (
            <SignOut toast={this.makeToast} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword toast={this.makeToast} user={user} />
          )} />
        </main>
        <footer>
          {toasts.map((toast) => (
            <Toaster
              key={toast.id}
              message={toast.message}
              theme={toast.theme}
              id={toast.id}
              removeToast={this.removeToast}
            />
          ))}

        </footer>

      </Fragment>
    )
  }
}

export default App
