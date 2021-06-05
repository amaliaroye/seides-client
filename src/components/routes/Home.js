import React, { Fragment } from 'react'
import TextBox from '../shared/TextBox'

const text = 'I fucking hate my life'

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
