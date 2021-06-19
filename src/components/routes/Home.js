import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'

const rotate = keyframes`
  from {
    transform: translate(0deg);
  }

  to {
    transform: translate(360deg);
  }
`

const TitleWrapper = styled.div`
    height: 200px;
    width: 400px;
    /* background-repeat: no-repeat; */
    background-color: transparent;
    border: none;
    /* background-position: center; */
    background-image: url('./title.png');
    background-size: cover;
`

const authenticatedOptions = (
  <div>
    <Link to='/sign-out'>
      <Button text='Sign Out'/>
    </Link>
    <Link to='/change-password'>
      <Button text='Change Password'/>
    </Link>
    <Link to='/create-game'>
      <Button text='New Game'/>
    </Link>
    <Link to='/games'>
      <Button text='All Games'/>
    </Link>
  </div>
)
const unauthenticatedOptions = (
  <div>
    <Link to='/sign-up'>
      <Button text='Sign Up'/>
    </Link>
    <Link to='/sign-in'>
      <Button text='Sign In'/>
    </Link>
  </div>
)

const Home = ({ user }) => {
  return (
    <section>
      <TitleWrapper />
      { user ? authenticatedOptions : unauthenticatedOptions }
    </section>
  )
}

export default Home
