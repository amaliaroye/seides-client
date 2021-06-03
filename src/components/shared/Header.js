import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='sign-out'><Button text='Sign Out'/></NavLink>
    <NavLink to='change-password'><Button text='Change Password'/></NavLink>
  </Fragment>
)
const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='sign-up'><Button text='Sign Up'/></NavLink>
    <NavLink to='sign-in'><Button text='Sign In'/></NavLink>
  </Fragment>
)
const alwaysOptions = (
  <Fragment>
    <NavLink to='/'><Button text='Home'/></NavLink>
    <NavLink to='/konva'><Button text='KonvaTest'/></NavLink>
    <NavLink to='/create-npc'><Button text='Create NPC'/></NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <header>
      { user && <span>Welcome, {user.email}</span>}
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
    </header>
  )
}
export default Header