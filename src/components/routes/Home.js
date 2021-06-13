import React from 'react'
import TextBox from '../shared/TextBox'
// import styled from 'styled-components'

const text = 'there was so much hope...'

// const homePage = styled.section`
//
// `

const Home = (props) => {
  return (
    <section>
      <h1>Switching SEIdes</h1>
      <TextBox text={text} />
    </section>
  )
}

export default Home
