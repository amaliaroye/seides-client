import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'

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

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(console.log(`Welcome ${this.state.name}!`))
      .then(() => alert({
        message: 'Welcome!',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          name: '' })
        alert({
          message: 'Sign Up Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { email, password, passwordConfirmation, name } = this.state
    return (
      <section className='form-container sign-up'>
        <div className='form-group' >
          <form onSubmit={this.handleSubmit} className='sign-up'>
            <h2 className='header sign-up'>Sign Up!</h2>
            <input
              name='email'
              onChange={this.handleChange}
              value={email}
              type='email'
              placeholder='email'
            />

            <input
              name='name'
              onChange={this.handleChange}
              value={name}
              type='text'
              placeholder='name'
            />

            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              type='password'
              placeholder='password'
            />

            <input
              name='passwordConfirmation'
              onChange={this.handleChange}
              value={passwordConfirmation}
              type='password'
              placeholder='confirm password'
            />

            <button type="submit">Sign Up!</button>
          </form>
        </div>
      </section>
    )
  }
}

export default withRouter(SignUp)
