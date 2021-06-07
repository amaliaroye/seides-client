/*
This is for games/:id
when you're playing a game, this is what's on the screen generated from gamecreate.
handles all generated content made by gamecreate
*/

import React, { useState, useEffect, Fragment } from 'react'
import { gameShow, gameUpdate } from '../../api/game'
// import { npcShow, npcUpdate } from '../../api/npc'
// import TextBox from '../shared/TextBox'

const GamePlay = ({ alert, id }) => {
  const [game, setGame] = useState({})
  const [currentNpc, setCurrentNpc] = useState({})
  // const [logEntry, setLogEntry] = useState(null)

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(game.id)
      .then(res => setGame(res.data.game))
      .then(console.log)
      .then(setGame({ ...game, logs: [Date()] }))
      .then(() => alert({
        message: 'Loaded Game!',
        variant: 'success'
      }))
      .catch(() => alert({
        message: 'Oh no...Couldn\'t load the game...',
        variant: 'danger'
      }))
  }, [])
  // const npcIds = game.npcs
  // // map npcs for npc of game.npcs
  // const npcList = npcIds.map(npcId => {
  //   // get npc data from server
  //   npcShow(npcId)
  //     // .then(npc => setCurrentNpc(npc))
  //     .catch(console.error)
  // })

  const playGame = () => {
    // npcList.forEach(console.log())
    // show next npc in array, load npc data
    // user selects option,
    // if good option, add points, if bad option, deduct points!
    // if (option[0]) {
    //   return response[0]
    // }
    // update game.log
    // change NPC data, update npc 'requestComplete' to true
    setCurrentNpc({ ...currentNpc, requestComplete: true })
    // npcUpdate(currentNpc, currentNpc.id)
    // updates the state of the current game
    // gameUpdate() the server
    gameUpdate(game)
  }

  return (
    <Fragment>
      <button onClick={playGame}>Play</button>
    </Fragment>
  )
}

export default GamePlay
