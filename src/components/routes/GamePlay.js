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
const { user, alert } = props


const GamePlay = props => {
  const [game, setGame] = useState({
    owner: props.user,
    map: '',
    over: false,
    score: 0,
    npcs: [],
    logs: []
  })

  // when game loads, set the state of the game shown.
  useEffect(() => {
    gameShow(game.id, user)
      .then(res => setGame(res.data.game))
      .then(() => props.alert({
        message: 'Loaded Game!',
        variant: 'success'
      }))
      .catch(() => props.alert({
        message: 'Oh no...Couldn\'t load the game...'',
        variant: 'danger'
      }))
  }, [])

  return (
    <Fragment>

    </Fragment>
  )
}

export default GamePlay
