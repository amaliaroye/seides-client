import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
// import styled from 'styled-components'

// const NavButton = styled.button`
//
// `

const navLinkActive = {
  color: 'black'
}

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-out' activeClassName='current'><Button text='Sign Out'/></NavLink>
    <NavLink to='/change-password' activeClassName='current'><Button text='Change Password'/></NavLink>
  </Fragment>
)
const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' activeClassName='current'><Button text='Sign Up'/></NavLink>
    <NavLink to='/sign-in' activeClassName='current'><Button text='Sign In'/></NavLink>
  </Fragment>
)
const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' activeClassName='current'><Button text='Home'/></NavLink>
    <NavLink to='/create-game' activeClassName='current'><Button text='New Game'/></NavLink>
    <NavLink to='/games' activeStyle={navLinkActive}>
      <Button text='All Games'/>
      {/* <NavButton>All Games</NavButton> */}
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => {
  return (
    <header>
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
    </header>
  )
}
export default Header
