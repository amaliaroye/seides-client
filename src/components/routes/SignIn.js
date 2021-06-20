import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

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
      <section>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign In</h1>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              name='email'
              onChange={this.handleChange}
              value={email}
              type='email'
              placeholder='email'
            />
          </div>
          <div>
            <label htmlFor='Password'>Password: </label>
            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              type='password'
              placeholder='password'
            />
          </div>
          <div className='buttons'>
            <Link to='/'>
              <button>cancel</button>
            </Link>
            <button type="submit">
            Sign In!
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(SignIn)
