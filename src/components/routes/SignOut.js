import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'

class SignOut extends Component {
  componentDidMount () {
    const { toast, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => toast({
        message: `Bye ${user.name}!`,
        color: 'green'
      }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
      .catch(() => toast({
        message: 'No. You can\'t leave!',
        color: 'red'
      }))
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
