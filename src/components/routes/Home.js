import React, { Fragment } from 'react'
import TextBox from '../shared/TextBox'

const message = 'Luna is holding a toy mouse.'

const Home = (props) => {
  return (
    <Fragment>
      <div className='container'>
        <div className='gameport'>
          <TextBox message={message}/>
        </div>
      </div>
    </Fragment>
  )
}
export default Home
