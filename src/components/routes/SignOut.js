import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'

class SignOut extends Component {
  componentDidMount () {
    const { history, clearUser, user } = this.props

    signOut(user)
      .then(() => console.log(user))
      .then(() => history.push('/'))
      .then(() => clearUser(user))
      .catch(console.error)
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
