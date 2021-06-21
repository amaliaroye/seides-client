import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signUp, signIn } from '../api/auth'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()

    const { toast, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(
        toast({
          message: `Welcome ${this.state.name}!`,
          theme: 'green'
        })
      )
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          name: '' })
        toast({
          message: 'Sign Up Failed with error: ' + error.message,
          theme: 'red'
        })
      })
  }
  render () {
    const { email, password, passwordConfirmation, name } = this.state
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up!</h1>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              name='email'
              onChange={this.handleChange}
              value={email}
              type='email'
              placeholder='enter email'
            />
          </div>

          <div>
            <label htmlFor='name'>Name:</label>
            <input
              name='name'
              onChange={this.handleChange}
              value={name}
              type='text'
              placeholder='enter name'
            />
          </div>

          <div>
            <label htmlFor='password'>Password: </label>
            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              type='password'
              placeholder='enter password'
            />
          </div>

          <div>
            <label htmlFor='passwordConfirmation'>Confirm Password: </label>
            <input
              name='passwordConfirmation'
              onChange={this.handleChange}
              value={passwordConfirmation}
              type='password'
              placeholder='confirm password'
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
        <p>Please don&apos;t use any real information...</p>
      </section>
    )
  }
}

export default withRouter(SignUp)
