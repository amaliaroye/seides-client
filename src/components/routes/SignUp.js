import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
// import messages from '../../utils/alertMessages'

const SignUp = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    name: ''
  })

  const handleChange = event => setUser({
    [event.target.name]: event.target.value
  })

  const onSignUp = event => {
    event.preventDefault()
    const { history } = props
    signUp(user)
      // sign in the user after they make a new account
      .then(() => signIn(user))
      .then(res => setUser(user))
      .then(console.log('a thing'))
      .then(() => history.push('/'))
      .catch(error => {
        setUser({ email: '', password: '', passwordConfirmation: '', name: '' })
        console.log(' no user ' + error)
      })
  }

  const { email, password, passwordConfirmation, name } = user

  return (
    <div>
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <div>
            <label className='form-input label'>Email</label>
            <input
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

export default withRouter(SignUp)
