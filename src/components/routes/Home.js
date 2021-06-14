import React from 'react'
import styled from 'styled-components'
import Typing from '../shared/Typing'

const TitleWrapper = styled.div`
    height: 200px;
    width: 400px;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    background-position: center;
    background-image: url('./title.png');
  background-size: cover;
`

const Home = (props) => {
  return (
    <section>
      <TitleWrapper />
      <Typing text='Oogabooga!'/>
    </section>
  )
}

export default Home
