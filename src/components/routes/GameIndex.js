import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gameIndex, gameDelete } from '../../api/game'
import styled from 'styled-components'

const GameInfoCard = styled.div`
  border: solid 1px gray;
  display: inline-grid;
  padding: 1em;
  margin: 1em;
  background-color: white;
`

const GameIndex = ({ user, toast }) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    gameIndex(user)
      .then(res => setGames(res.data.games))
      .then(()=>{toast({message:'Loaded your games!'})})
      .catch(()=>toast({message:'Uh oh, something went wrong.'}))
  }, [games])

  const deleteGame = (game, user) => {
    gameDelete(game, user)
      .then(()=>toast({message:'Game deleted!'}))
      .catch(()=>toast({message:'Could not delete!'}))
  }

  const listGames = games.map(game => (
    <GameInfoCard key={game._id}>
      <p>Score: {game.score}</p>
      <p>Turn: {game.turn}/{game.npcs.length}</p>
      <p>{game.over ? 'Completed!' : 'In Progress'}</p>
      <p>{game.createdAt}</p>
      <div>
        <button onClick={() => deleteGame(game.id, user)}>Delete</button>
      </div>
    </GameInfoCard>
  ))

  return (
    <div>
      <h1>All Games</h1>
      {listGames}
    </div>
  )
}
export default GameIndex
