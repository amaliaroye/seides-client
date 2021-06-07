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

  handleSubmit = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert({
        message: 'Welcome! You have been logged in!',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        alert({
          message: 'Sorry, couldn\'t log you in because of the error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { email, password } = this.state

    return (
      <div className='form-container sign-in-container' >
        <form onSubmit={this.handleSubmit} className='sign-in'>
          <h1 className='header sign-in'>Sign In</h1>
          <input
            name='email'
            onChange={this.handleChange}
            value={email}
            className='form sign-in'
            type='email'
            placeholder='email'
          />

          <input
            name='password'
            onChange={this.handleChange}
            value={password}
            type='password'
            className='form sign-in'
            placeholder='password'
          />

          <button type="submit" className='form sign-in'>
        Sign In!
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
