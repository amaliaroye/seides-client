import React, { useState, useEffect, useRef } from 'react'
import { gameShow, gameUpdate } from '../../api/game'
import { npcShow, npcUpdate } from '../../api/npc'
import TypedText from '../shared/TypedText'

const GamePlay = (props) => {
  const [game, setGame] = useState({
    npcs: [],
    score: '',
    turn:0,
    id:props.match.params.id
  })
  const [currentNpc, setCurrentNpc] = useState({
    name: '',
    request: '',
    options: [],
    replies: []
  })
  const [message, setMessage] = useState('')

  // useRef does not re-render the component, its values persist through renders
  const turn = useRef(0)

  const { user } = props

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(props.match.params.id, user)
      .then(res => setGame(res.data.game))
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

  const loadNpc = () => {
    npcShow(game.npcs[turn.current])
      .then(res => setCurrentNpc(res.data.npc))
      .then(console.log)
      .catch(console.error)
  }

  const nextNpc = () => {
    turn.current += 1
    setGame({ ...game, turn: (turn.current) })
    setMessage('')
    loadNpc()
  }

  useEffect(()=>{

  },[message])

  return (
    <React.Fragment>
      <section>
        <div className='hud'>
        Turn: {turn.current} Score: {game.score}
        </div>
        <TypedText name={currentNpc.name} text={currentNpc.requestComplete ? message : currentNpc.request} />

        <div>
          <button onClick={nextNpc}>nextNpc</button>
        </div>

        <div className='options'>
          <button onClick={selectOption} value='0' className='option'>
            {currentNpc.options[0]}
          </button>
          <button onClick={selectOption} value='1' className='option'>
            {currentNpc.options[1]}
          </button>
          <button onClick={selectOption} value='2' className='option'>
            {currentNpc.options[2]}
          </button>
        </div>

      </section>
    </React.Fragment>
  )
}

export default GamePlay
