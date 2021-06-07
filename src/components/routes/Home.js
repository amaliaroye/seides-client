import React from 'react'
import TextBox from '../shared/TextBox'
// import styled from 'styled-components'

const text = 'there was so much hope...'

const Home = (props) => {
  return (
    <React.Fragment>
      <h1>Switching SEIdes</h1>
      <TextBox text={text} />
    </React.Fragment>
  )
}

export default Home
