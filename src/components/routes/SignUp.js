import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
              value={email}
              type='text'
              placeholder='enter name'
            />
          </div>

          <div>
            <label htmlFor='Password'>Password: </label>
            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              type='password'
              placeholder='enter password'
            />
          </div>

          <div>
            <label htmlFor='confirmpassword'>Confirm Password: </label>
            <input
              name='confirmpassword'
              onChange={this.handleChange}
              value={password}
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
      </section>
    )
  }
}

export default withRouter(SignUp)
