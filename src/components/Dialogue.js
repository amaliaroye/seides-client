import React, { useState } from 'react'
import { randomMessage } from '../utils/messages.js'

const Dialogue = () => {
  const [message, setMessage] = useState('')

  return (
    <div className='dialogue-box'>
      <div className="wrapper">
        <div className="message-body">
          {message}
        </div>
      </div>
      <button className="message-button" onClick={() => setMessage(randomMessage)}>New Message</button>
    </div>
  )
}

export default Dialogue
