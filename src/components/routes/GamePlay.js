import React, { useState, useEffect, Fragment } from 'react'
import { gameShow, gameUpdate } from '../../api/game'
import { npcShow, npcUpdate } from '../../api/npc'
// import styled from 'styled-components'

const GamePlay = (props) => {
  const [game, setGame] = useState({
    npcs: [], score: ''
  })
  const [currentNpc, setCurrentNpc] = useState({
    name: '', request: '', options: [], replies: []
  })
  const [turn, setTurn] = useState(0)
  const [message, setMessage] = useState('')

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(props.match.params.id)
      .then(res => setGame(res.data.game))
      .then(() => props.alert({
        message: 'Loaded Game!',
        variant: 'success'
      }))
      .catch(() => props.alert({
        message: 'Oh no...Couldn\'t load the game...',
        variant: 'danger'
      }))
  }, [])

  useEffect(() => {
    // end game if there are no more npcs
    if (turn > game.npcs.length) {
      setGame({ ...game, over: true })
      gameUpdate(game.id, game)
      setTurn(0)
      console.log('Game over!')
    }
  }, [turn])

  const playGame = () => {
    npcShow(game.npcs[turn])
      .then(res => setCurrentNpc(res.data.npc))
      .then(setMessage(currentNpc.request))
      .catch(console.error)
  }

  const selectOption = () => {
    setMessage(currentNpc.replies[event.target.value])

    if (event.target.value === 0) {
      setGame({ ...game, score: (game.score + currentNpc.points) })
    }
    if (event.target.value === 2) {
      setGame({ ...game, score: (game.score - currentNpc.points) })
    }

    setCurrentNpc({ ...currentNpc, requestComplete: true })
    npcUpdate(currentNpc.id, currentNpc)
    // moves to next npc
    setTurn(turn + 1)
    gameUpdate(game.id, game)
  }

  return (
    <Fragment>
      <div>
        <div>{currentNpc.name}:</div>
        <div>{message}</div>
      </div>

      <div>
        <button onClick={selectOption} value='0'>{currentNpc.options[0]}</button>
        <button onClick={selectOption} value='1'>{currentNpc.options[1]}</button>
        <button onClick={selectOption} value='2'>{currentNpc.options[2]}</button>
      </div>
      <button onClick={playGame}>playGame</button>
      <button onClick={playGame}>setMessage</button>
      <button onClick={() => console.log(game)}>console.log</button>
      <div>Turn: {turn}</div>
      <div>Score: {game.score}</div>
    </Fragment>
  )
}

export default GamePlay
