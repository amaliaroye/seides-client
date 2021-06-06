import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'

const SignIn = ({ newAlert, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = event => {
    event.persist()
    setUser(currentUser => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedUser = Object.assign({}, currentUser, updatedField)
      return editedUser
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    signIn(user)
      .then(res => setUser(res.data.user))
      .then(() => newAlert({
        message: 'Welcome! You have been logged in!',
        color: 'green'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        setUser({ email: '', password: '' })
        newAlert({
          message: 'Sorry, couldn\'t log you in because of the error: ' + error.message,
          color: 'red'
        })
      })
  }

  return (
    <div className='form-container sign-in-container' >
      <form onSubmit={handleSubmit} className='sign-in'>
        <h1 className='header sign-in'>Sign In</h1>
        <input
          name='email'
          onChange={handleChange}
          value={user.email}
          className='form sign-in'
          type='email'
          placeholder='email'

        />

        <input
          name='password'
          onChange={handleChange}
          value={user.password}
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

export default withRouter(SignIn)
