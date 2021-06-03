import React from 'react'
import Button from './Button'

const TextBox = (props) => {
  const message = 'I\'m a blurb and I do stuff and things. Maybe I can be the diary?'

  const handleSubmit = () => {
    return ('things')
  }

  return (
    <div className='text-box'>
      <div className="text-wrapper">
        <div className="text-body">
          {message}
        </div>
      </div>
      <Button onClick={handleSubmit} type='submit' text='Submit' className='text-box-button'/>
    </div>
  )
}

export default TextBox
