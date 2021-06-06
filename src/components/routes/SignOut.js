import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'

class SignOut extends Component {
  componentDidMount () {
    const { alert, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => alert({
        message: 'Signed Out! Come back soon!',
        variant: 'success'
      }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
