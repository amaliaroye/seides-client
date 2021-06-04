import React, { Fragment } from 'react'
import TextBox from '../shared/TextBox'

const text = 'I hate myself'

const Home = (props) => {
  return (
    <Fragment>
      <div className='gameport'>
        <TextBox text={text}/>
      </div>
    </Fragment>
  )
}

export default Home
