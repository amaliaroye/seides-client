// import React, { useState, useEffect } from 'react'
// import { npcIndex } from '../../api/npc'
// import NpcDelete from './NpcDelete'
// import styled from 'styled-components'

// const NpcCard = styled.div`
//   border: solid white 1px;
//   margin: 5px;
//   background-color: lightgray;
//   padding: 10px;
//   width: 30vw;
// `

// const CardLayout = styled.div`
//   display: flex;
//   flex-flow: row wrap;
// `

// const NpcIndex = props => {
//   const [npcs, setNpcs] = useState([])

//   useEffect(() => {
//     npcIndex()
//       .then(res => setNpcs(res.data.npcs))
//       .then(() => props.alert({
//         message: 'Loaded NPCs!',
//         variant: 'success'
//       }))
//       .catch(() => props.alert({
//         message: 'I want my NPCs! :(',
//         variant: 'danger'
//       }))
//   }, [])

//   const resetNpcs = () => {
//     setNpcs([])
//     npcIndex()
//       .then(res => setNpcs(res.data.npcs))
//       .then(() => props.alert({
//         message: 'Loaded NPCs!',
//         variant: 'success'
//       }))
//       .catch(() => props.alert({
//         message: 'I want my NPCs! :(',
//         variant: 'danger'
//       }))
//   }

//   const listNpcs = npcs.map(npc =>
//     <NpcCard key={npc.id}>
//       <ul>
//         <li className='npc-id'>{npc.id}</li>
//         <li>Points: {npc.points}</li>
//         <li>Request: {npc.request}</li>
//         <li>Options: {npc.options.map(option => {
//           return (<ol key={option}>○ {option}</ol>)
//         })}
//         </li>
//         <li>Replies: {npc.replies.map(reply => {
//           return (<ol key={reply}>○ {reply}</ol>)
//         })}
//         </li>

//         <NpcDelete npc={npc} onClick={resetNpcs}/>
//       </ul>
//     </NpcCard>
//   )

//   return (
//     <div>
//       <button onClick={resetNpcs}>Reset</button>
//       <CardLayout>
//         {listNpcs}
//       </CardLayout>
//     </div>
//   )
// }

// export default NpcIndex
