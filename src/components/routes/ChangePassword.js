import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'


class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { history, user, toast } = this.props

    changePassword(this.state, user)
      .then(() => console.log('changePassword'))
      .then(() => history.push('/'))
      .then(() => toast({
        message: 'Password Changed!'
      }))
      .catch(() => toast({
        message: 'Sorry! Something went wrong. Please try again!'
      }))
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <section>
        <form onSubmit={this.onChangePassword}>
          <h1>Change Password</h1>
          <div>
            <label>Old password</label>
            <input
              required
              name="oldPassword"
              value={oldPassword}
              type="password"
              placeholder="Old Password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>New Password</label>
            <input
              required
              name="newPassword"
              value={newPassword}
              type="password"
              placeholder="New Password"
              onChange={this.handleChange}
            />
          </div>
          <div className='buttons'>
            <Link to='/'>
              <button>cancel</button>
            </Link>
            <button type="submit">Change Password</button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(ChangePassword)
