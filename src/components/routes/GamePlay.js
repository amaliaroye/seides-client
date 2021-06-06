/*
This is for games/:id
when you're playing a game, this is what's on the screen generated from gamecreate.
handles all generated conted made by gamecreate
*/

import React, {
  useState,
  useEffect,
  Fragment
} from 'react'
import { gameShow, gameUpdate } from '../../api/game'

const GamePlay = props => {
  const { user, alert } = props

  const [game, setGame] = useState({})
  // local game data? how many npcs are there? how many npcs have been seen?

  // when game loads, set the state of the game shown.
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

  const playGame = () => {
    // show next npc in array, load npc data
    // user selects option,
    // if good option, add points, if bad option, deduct points!
    // updates the state of the current game
    // gameUpdate() the server
  }

  return (
    <Fragment>

    </Fragment>
  )
}

export default GamePlay
