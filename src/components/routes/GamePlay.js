/*
This is for games/:id
when you're playing a game, this is what's on the screen generated from gamecreate.
handles all generated content made by gamecreate
*/

import React, { useState, useEffect, Fragment } from 'react'
import { gameShow, gameUpdate } from '../../api/game'
import TextBox from '../shared/TextBox'

const GamePlay = ({ user, alert, id }) => {
  const [game, setGame] = useState(null)
  // get npc data from server
  const [currentNpc, setCurrentNpc] = useState(null)

  // when component renders, set the state of the
  useEffect(() => {
    gameShow(game.id, user)
      .then(res => setGame(res.data.game))
      .then(() => alert({
        message: 'Loaded Game!',
        variant: 'success'
      }))
      .catch(() => alert({
        message: 'Oh no...Couldn\'t load the game...',
        variant: 'danger'
      }))
  }, [])

  const npcList = game.npcs.map(npcId => {
    npcShow(npcId)
  })

  const playGame = () => {
    // make an axios request for
    // map npcs! for npc of game.npcs
    // show next npc in array, load npc data

    // user selects option,
    // if good option, add points, if bad option, deduct points!
    // update game.log
    // change NPC data, update npc 'requestComplete' to true
    // updates the state of the current game
    // gameUpdate() the server
  }

  return (
    <Fragment>

      <TextBox>{currentNpc.request}</TextBox>
    </Fragment>
  )
}

export default GamePlay
