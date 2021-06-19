import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { gameShow, gameUpdate } from '../../api/game'
import { npcShow, npcUpdate } from '../../api/npc'
import TextBox from '../shared/TextBox'
import styled from 'styled-components'

// TODO: should I put the text in a fieldset? The legend may be handy
// You can use the transform property to position the legend

const px = 3
const GameBox = styled.div`
  width: calc(${px} * 320px);
  height: calc(${px} * 240px);
  display: grid;
  grid-template-areas:
    "hud hud hud hud hud"
    ". text text text ."
    ". name . . ."
    "back . sprite . next"
    ". opt opt opt ."
    "foot foot foot foot foot";
  background: hsla(197, 47%, 85%, .7);
`
const Sprite = styled.div`
  grid-area: sprite;
  background-color: lightpink;
  width: calc(${px} * 32px);
  height: calc(${px} * 48px);
`
const Footer = styled.div`
  grid-area: foot;
`
// TODO: fix all the async issues!
const GamePlay = (props) => {
  if (!props.user) return (<Redirect to={'/'} />)
  const [game, setGame] = useState({
    id: props.match.params.id,
    npcs: [],
    turn: (0),
    score: ''
  })
  const [currentNpc, setCurrentNpc] = useState({
    name: '',
    request: '',
    options: [],
    replies: []
  })
  const [turn, setTurn] = useState(0)
  const [message, setMessage] = useState('')

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(props.match.params.id, props.user)
      .then(res => setGame(res.data.game))
      .then(console.log('in the useEffect hook for getting game data'))
      .catch(console.error)
  }, [])

  useEffect(() => {
    // end game if there are no more npcs in the array
    if (turn > game.npcs.length) {
      setGame({ ...game, over: true })
      gameUpdate(game, props.user)
      setTurn(0)
      console.log('Game over!')
    }
  }, [turn])

  const loadNpc = () => {
    npcShow(game.npcs[game.turn])
      .then(res => setCurrentNpc(res.data.npc))
      .catch(console.error)
  }

  const selectOption = (event) => {
    // shows the corresponding reply
    setMessage(currentNpc.replies[event.target.value])

    if (event.target.value === '0') {
      setGame({ ...game, score: (game.score + currentNpc.points) })
    }
    if (event.target.value === '2') {
      setGame({ ...game, score: (game.score - currentNpc.points) })
    }

    // axios update for npc and game
    setCurrentNpc({ ...currentNpc, requestComplete: true })
    npcUpdate(currentNpc.id, currentNpc)
    gameUpdate(game, props.user)
  }

  const nextNpc = () => {
    setGame((prevGame) =>
      ({ ...prevGame, turn: (prevGame.turn + 1) })
    )
    setMessage('')
    loadNpc()
  }

  return (
    <GameBox>
      <div style={{ gridArea: 'hud' }}>
        Turn: {game.turn} Score: {game.score}
      </div>

      <TextBox text={currentNpc.requestComplete ? message : currentNpc.request} />
      <div style={{ gridArea: 'name' }}>{currentNpc.name}</div>

      <div style={{ gridArea: 'back' }}>
        <button onClick={loadNpc}>loadNpc</button>
      </div>
      <Sprite />
      <div style={{ gridArea: 'next' }}>
        <button onClick={nextNpc}>nextNpc</button>
      </div>

      <div style={{ gridArea: 'opt' }}>
        <button onClick={selectOption} value='0' style={{ display: 'block', width: '100%' }}>{currentNpc.options[0]}</button>
        <button onClick={selectOption} value='1' style={{ display: 'block', width: '100%' }}>{currentNpc.options[1]}</button>
        <button onClick={selectOption} value='2' style={{ display: 'block', width: '100%' }}>{currentNpc.options[2]}</button>
      </div>

      <Footer />

    </GameBox>
  )
}

export default GamePlay
