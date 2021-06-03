import React, { Fragment } from 'react'
// import Button from './Button'

import { npcDelete } from '../../api/npc'

const NpcDelete = props => {
  // initially our npc will be empty until the form is filled in
  const { npc } = props

  const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault()
    // send axios request
    npcDelete(npc.id)
      .then(res => console.log(res))
      .catch(console.error)
  }

  return (
    <Fragment>
      <button onClick={handleSubmit}>Delete {npc.name}</button>
    </Fragment>
  )
}

export default NpcDelete
