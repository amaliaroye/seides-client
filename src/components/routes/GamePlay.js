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
  const [message, setMessage] = useState('Click to play!')

  // useRef does not re-render the component, its values persist through renders
  const turn = useRef(-1)

  const { user, toast } = props

  // when component renders, set the state of the game to response
  useEffect(() => {
    gameShow(props.match.params.id, user)
      .then(res => setGame(res.data.game))
      .then(()=> toast({ theme: 'green',
        message: 'Loaded game!'
      }))
      .catch(()=> toast({ theme: 'red',
        message: 'Whoops! Couldn\'nt load the game!'
      }))
  }, [])

  useEffect(() => {
    // end game if there are no more npcs in the array
    if (!game) return
    if (turn.current >=  game.npcs.length) {
      toast({message:'Game Over!'})
      setGame({ ...game, over: true })
        .then(()=> toast({ theme: 'orange',
          message: 'Game Over!'
        }))
    }
    // gameUpdate(game, user)
  }, [game])

  const selectOption = (event) => {
    // shows the corresponding reply
    setMessage(currentNpc.replies[event.target.value])

    if (event.target.value === '0') {
      setGame({ ...game, score: (game.score + currentNpc.points) })
      toast({message:`${currentNpc.name} gave you ${currentNpc.points} points!`})
    }
    if (event.target.value === '1') {
      setGame({ ...game, score: (game.score - currentNpc.points) })
      toast({message:`${currentNpc.name} gave you a thumbs up!`})
    }
    if (event.target.value === '2') {
      setGame({ ...game, score: (game.score - currentNpc.points) })
      toast({message:`${currentNpc.name} took away ${currentNpc.points} points!`})
    }

    // axios update for npc and game
    setCurrentNpc({ ...currentNpc, requestComplete: true })
    npcUpdate(currentNpc.id, currentNpc)
    gameUpdate(game, user)
  }

  const loadNpc = () => {
    npcShow(game.npcs[turn.current])
      .then(res => setCurrentNpc(res.data.npc))
      .catch(console.error)
  }

  const nextNpc = () => {
    if (turn.current >=  game.npcs.length) {
      toast({message:'Game Over!'})
      setGame({ ...game, over: true })
        .then(()=> toast({ theme: 'orange',
          message: 'Game Over!'
        }))
        .then(()=>gameUpdate(game, user))
    }

    turn.current += 1
    setGame({ ...game, turn: (turn.current) })
    setMessage('')
    loadNpc()
  }

  return (
    <React.Fragment>
      <section>
        <div className='hud'>
        Turn: {turn.current} Score: {game.score}
        </div>


        <TypedText next={nextNpc} name={currentNpc.name} text={currentNpc.requestComplete ? message : currentNpc.request} />

        {/* <div>
          <button onClick={nextNpc}>nextNpc</button>
        </div> */}

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
