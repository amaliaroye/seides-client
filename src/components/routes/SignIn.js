import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'

const SignIn = (props) => {
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
      .then(() => props.history.push('/'))
      .catch(console.error)
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
          autoComplete="off"
        />

        <input
          name='password'
          onChange={handleChange}
          value={user.password}
          type='password'
          className='form sign-in'
          placeholder='password'
          autoComplete="off"
        />

        <button type="submit" className='form sign-in'>
        Sign In!
        </button>
      </form>
    </div>
  )
}

export default withRouter(SignIn)
