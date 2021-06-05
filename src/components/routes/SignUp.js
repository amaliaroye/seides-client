import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'

const SignUp = (props) => {
  const [user, setUser] = useState({ email: '', password: '', name: '' })

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
    signUp(user)
      .then((res) => signIn(res.data.user))
      .then(() => setUser(user))
      .then(() => props.history.push('/'))
      .catch(console.error)
  }

  return (
    <section className='form-container sign-up'>
      <div className='form-group' >
        <form onSubmit={handleSubmit} className='sign-up'>
          <h2 className='header sign-up'>Sign Up!</h2>
          <input
            name='email'
            onChange={handleChange}
            value={user.email}
            className='form sign-up'
            type='email'
            placeholder='email'
            autoComplete="off"
          />

          <input
            name='password'
            onChange={handleChange}
            value={user.password}
            type='password'
            className='form sign-up'
            placeholder='password'
            autoComplete="off"
          />

          <input
            name='passwordConfirmation'
            onChange={handleChange}
            value={user.passwordConfirmation}
            type='password'
            className='form sign-up'
            placeholder='password'
            autoComplete="off"
          />

          <div className='choose-player'>
            <h3 className='header sign-up'>Choose your player!</h3>

            <input type="radio" id="Amalia" name="name" value="Amalia" className='form sign-up' />
            <label htmlFor="Amalia" className='radio'>Amalia</label>

            <input type="radio" id="Luna" name="name" value="Luna" className='form sign-up' />
            <label htmlFor="Luna" className='radio'>Luna</label>

            <input type="radio" id="Scoop" name="name" value="Scoop" className='form sign-up' />
            <label htmlFor="Scoop" className='radio form sign-up'>Scoop</label>
          </div>

          <button type="submit" className='form sign-up'>Sign Up!</button>
        </form>
      </div>
    </section>
  )
}

export default withRouter(SignUp)
