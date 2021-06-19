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

    const { history, setUser } = this.props

    signIn(this.state)
      .then(res => {
        setUser(res.data.user)
        console.log(`Welcome Back ${res.data.user.name}!`)
      })
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })

      })
  }
  render () {
    const { email, password } = this.state

    return (
      <div className='sign-in' >
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
