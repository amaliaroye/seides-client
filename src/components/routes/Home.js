import React, { useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

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
  <div className="container">
    <Link to='/create-game'>
      <button className='big'>Create New Game</button>
    </Link>

    <div className="buttons">
      <Link to='/games'>
        <button>My Games</button>
      </Link>
      <Link to='/sign-out'>
        <button>Sign Out</button>
      </Link>
      <Link to='/change-password'>
        <button>Change Password</button>
      </Link>
    </div>
  </div>
)
const unauthenticatedOptions = (
  <div className="buttons">
    <Link to='/sign-up'>
      <button>Sign Up</button>
    </Link>
    <Link to='/sign-in'>
      <button>Sign In</button>
    </Link>
  </div>
)

const Home = ({ user, toast }) => {
  return (
    <section>
      <TitleWrapper />
      { user ? authenticatedOptions : unauthenticatedOptions }
      {/* <button onClick={()=>toast({
        message:'I am toast', theme: 'green'
      })}>Toast Bread</button> */}
    </section>
  )
}

export default Home
