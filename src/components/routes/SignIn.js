import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { newAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => newAlert({
        message: 'You\'re signed in!',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        newAlert({
          message: 'Whoops! Sign in failed with error: ' + error.message,
          variant: 'error'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div>
        <div>
          <h3>Sign In</h3>
          <form onSubmit={this.onSignIn}>
            <div>
              <label className='form-input label'>Email</label>
              <input
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={this.handleChange}
                className='form-input'
                type='email'
              />
            </div>
            <div>
              <label className='form-input label'>Password</label>
              <input
                placeholder='Enter Password'
                name='password'
                value={password}
                onChange={this.handleChange}
                className='form-input'
                type='text'
              />
            </div>
            <input
              value='Sign In!'
              type="submit"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
