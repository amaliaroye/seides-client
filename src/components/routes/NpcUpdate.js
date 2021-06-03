// import React, { Fragment, useState } from 'react'
// import Button from './Button'
//
// import { npcUpdate } from '../../api/npc'
//
// const NpcUpdate = props => {
//   // initially our npc will be empty until the form is filled in
//   const [npc, setNpc] = useState('')
//
//   const handleSubmit = (event) => {
//     // prevent page from reloading
//     event.preventDefault()
//     // send axios request
//     npcUpdate(npc.id)
//       .then(res => setNewNpcId(res.data.npc.id))
//       .then(console.log(newNpcId))
//       .catch(console.error)
//   }
//
//   return (
//     <Fragment>
//       <Button onClick={handleSubmit}>Edit NPC</Button>
//     </Fragment>
//   )
// }
//
// export default NpcUpdate
