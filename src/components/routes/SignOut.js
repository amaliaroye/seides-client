import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'

class SignOut extends Component {
  componentDidMount () {
    const { history, setUser, user } = this.props

    signOut(user)
      .then(() => console.log(user))
      .then(() => history.push('/'))
      .then(() => setUser(null))
      .then(() => console.log(user))
      .catch(console.error)
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
