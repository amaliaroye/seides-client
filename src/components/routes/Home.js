import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

// import styled from 'styled-components'

const Home = (props) => {
  return (
    <React.Fragment>
      <section className='container' id='container'>
        <SignUp />
        <SignIn />
      </section>
    </React.Fragment>
  )
}

export default Home
