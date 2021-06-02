import React, { Fragment, useState } from 'react'
// import { Redirect } from 'react-router-dom'
import { npcCreate } from '../../api/npc'
import NpcForm from './NpcForm'
import NpcIndex from './NpcIndex'
// import chalk from 'chalk'
// import messages from '../../utils/alertMessages'

const NpcCreate = props => {
  // const { user } = props

  // newNpcId will be null, until we successfully create a npc
  const [newNpcId, setNewNpcId] = useState(null)
  const [optionArray, setOptionArray] = useState([''])
  const [option, setOption] = useState('')
  // initially our npc will be empty until the form is filled in
  const [npc, setNpc] = useState({
    name: '',
    request: '',
    options: optionArray,
    points: ''
  })

  const handleChange = event => {
    event.persist()
    const { name, value } = event.target
    if (name === 'option') {
      // setOption(prevOption => {
      //   const updatedField = { value }
      //   const objectToCreate = (prevOption, updatedField)
      //   return objectToCreate
      // })
      setOption(value)
      console.log(value)
    } else {
      setNpc(prevNpc => {
        const updatedField = { [name]: value }
        // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
        const npcToCreate = Object.assign({}, prevNpc, updatedField)
        return npcToCreate
      })
    }
  }

  const handleAdd = (event) => {
    event.preventDefault()
    if (option) {
      setOptionArray([...optionArray, option])
    } else setOption('')
    console.log(optionArray)
  }

  const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault()
    // send axios request
    npcCreate(npc)
      .then(res => setNewNpcId(res.data.npc.id))
      .then(console.log(newNpcId))
      .catch(console.error)
  }

  return (
    <Fragment>
      <NpcForm
        npc={npc}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleAdd={handleAdd}
        option={option}
      />
      <button onClick={() => console.log(npc)}>Console.log</button>
      <NpcIndex />
    </Fragment>
  )
}

export default NpcCreate
