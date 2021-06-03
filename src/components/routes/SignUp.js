import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../../utils/alertMessages'

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

  onSignUp = event => {
    event.preventDefault()

    const { newAlert, history, setUser } = this.props

    signUp(this.state)
      // sign in the user after they make a new account
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => newAlert({
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '', name: '' })
        newAlert({
          message: messages.signUpFailure + error.message,
          variant: 'error'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation, name } = this.state

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
            <div>
              <label className='form-input label'>Confirm Password</label>
              <input
                placeholder='Confirm Password'
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={this.handleChange}
                className='form-input'
                type='text'
              />
            </div>
            <div>
              <label className='form-input label'>Name</label>
              <input
                placeholder='Enter Player Name'
                name='name'
                value={name}
                onChange={this.handleChange}
                className='form-input'
                type='text'
              />
            </div>
            <input value='Sign Up!' type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
