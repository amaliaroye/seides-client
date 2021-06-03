import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../../utils/alertMessages'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => msgAlert({
        heading: 'Signed Out Successfully',
        message: messages.signOutSuccess,
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