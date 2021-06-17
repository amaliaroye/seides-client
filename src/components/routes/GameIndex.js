import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gameIndex, gameDelete } from '../../api/game'
import styled from 'styled-components'

const GameInfoCard = styled.div`
  border: solid 1px gray;
  display: inline-grid;
  padding: 5px;
  margin: 5px;
  background-color: white;
`

const GameIndex = (props) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    gameIndex(props.user)
      .then(res => setGames(res.data.games))
      .catch(console.error)
  }, [])

  const deleteGame = (game, user) => {
    gameDelete(game, user)
    // TODO: update game state to refresh
      .then(console.log)
      .catch(console.error)
  }

  const listGames = games.map(game => (
    <GameInfoCard key={game._id}>
      <p>Score: {game.score}</p>
      {/* <p>Turn: {game.turn}/{game.npcs.length}</p> */}
      <p>{game.over ? 'Completed' : 'In Progress'}</p>
      <div>
        <Link to={`/games/${game.id}`}>
          <button disabled={!!game.over}>Continue</button>
        </Link>
        <button onClick={() => deleteGame(game.id)}>Delete</button>
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
