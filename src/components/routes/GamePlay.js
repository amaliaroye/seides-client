import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { gameShow, gameUpdate } from '../../api/game'
import { npcShow, npcUpdate } from '../../api/npc'
import TextBox from '../shared/TextBox'
/*

import styled from 'styled-components'

const px = 3
const GameBox = styled.div`
  width: calc(${px} * 320px);
  height: calc(${px} * 240px);
  display: grid;
  // grid-auto-flow: row;
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
*/

const GamePlay = (props) => {
  const [game, setGame] = useState({ npcs: [], score: '', turn:0, id:props.match.params.id })
  const [currentNpc, setCurrentNpc] = useState({
    name: '', request: '', options: [], replies: []
  })
  const [message, setMessage] = useState('')

  // useRef does not re-render the component, its values persist through renders
  const turn = useRef(0)

  const { user } = props

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(props.match.params.id, user)
      .then(res => setGame(res.data.game))
      .then(console.log)
      .catch(console.error)
  }, [])

  useEffect(() => {
    // end game if there are no more npcs in the array
    if (turn.current > game.npcs.length) {
      setGame({ ...game, over: true })
      console.log('Game over!')
    }
    gameUpdate(game, user)
  }, [])

  const loadNpc = () => {
    npcShow(game.npcs[turn.current])
      .then(res => setCurrentNpc(res.data.npc))
      .then(console.log)
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
    gameUpdate(game, user)
  }

  const nextNpc = () => {
    turn.current += 1
    setGame({ ...game, turn: (turn.current) })
    setMessage('')
    loadNpc()
  }

  return (
    <section>
      <button onClick={() =>console.log(game)}>console.log(game)</button>
      <div style={{ gridArea: 'hud' }}>
        Turn: {turn.current} Score: {game.score}
      </div>

      <TextBox text={currentNpc.requestComplete ? message : currentNpc.request} />
      <div style={{ gridArea: 'name' }}>{currentNpc.name}</div>

      <div style={{ gridArea: 'back' }}>
        <button onClick={loadNpc}>loadNpc</button>
      </div>
      <div style={{ gridArea: 'next' }}>
        <button onClick={nextNpc}>nextNpc</button>
      </div>

      <div style={{ gridArea: 'opt' }}>
        <button onClick={selectOption} value='0' style={{ display: 'block', width: '100%' }}>{currentNpc.options[0]}</button>
        <button onClick={selectOption} value='1' style={{ display: 'block', width: '100%' }}>{currentNpc.options[1]}</button>
        <button onClick={selectOption} value='2' style={{ display: 'block', width: '100%' }}>{currentNpc.options[2]}</button>
      </div>

    </section>
  )
}

export default withRouter(GamePlay)
