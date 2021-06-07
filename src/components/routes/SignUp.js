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
      .then(() => alert({
        message: 'Welcome!',
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '', name: '' })
        alert({
          message: 'Sign Up Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { email, password, passwordConfirmation } = this.state
    return (
      <section className='form-container sign-up'>
        <div className='form-group' >
          <form onSubmit={this.handleSubmit} className='sign-up'>
            <h2 className='header sign-up'>Sign Up!</h2>
            <input
              name='email'
              onChange={this.handleChange}
              value={email}
              className='form sign-up'
              type='email'
              placeholder='email'
              autoComplete="off"
            />

            <input
              name='password'
              onChange={this.handleChange}
              value={password}
              type='password'
              className='form sign-up'
              placeholder='password'
              autoComplete="off"
            />

            <input
              name='passwordConfirmation'
              onChange={this.handleChange}
              value={passwordConfirmation}
              type='password'
              className='form sign-up'
              placeholder='password'
              autoComplete="off"
            />

            <div className='choose-player'>
              <h3 className='header sign-up'>Choose your player!</h3>

              <input type="radio" id="Amalia" name={this.state.name} value="Amalia" className='form sign-up' />
              <label htmlFor="Amalia" className='radio'>Amalia</label>

              <input type="radio" id="Luna" name={this.state.name} value="Luna" className='form sign-up' />
              <label htmlFor="Luna" className='radio'>Luna</label>

              <input type="radio" id="Scoop" name={this.state.name} value="Scoop" className='form sign-up' />
              <label htmlFor="Scoop" className='radio form sign-up'>Scoop</label>
            </div>

            <button type="submit" className='form sign-up'>Sign Up!</button>
          </form>
        </div>
      </section>
    )
  }
}

export default withRouter(SignUp)
