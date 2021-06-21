import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import styled, { ThemeProvider, css, keyframes } from 'styled-components'
import GlobalFonts from './fonts/fonts'

// Shared Components
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Toaster from './components/Toaster'

// Route Components
import Home from './pages/Home'
import GameCreate from './pages/GameCreate'
import GameIndex from './pages/GameIndex'
import GamePlay from './pages/GamePlay'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import ChangePassword from './pages/ChangePassword'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      toasts: [],
      theme: {}
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
    const { toasts, user, theme } = this.state
    return (
      <ThemeProvider theme={theme}>

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

      </ThemeProvider>
    )
  }
}

export default App
