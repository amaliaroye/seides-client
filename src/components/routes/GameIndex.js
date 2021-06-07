import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gameIndex } from '../../api/game'

const GameIndex = (props) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    gameIndex()
      .then(res => setGames(res.data.games))
      .catch(console.error)
  }, [])

  const listGames = games.map(game => (
    <li key={game._id}>
      <Link to={`/games/${game.id}`}>Game ID: {game.id}</Link>
    </li>
  ))

  return (
    <div>
      <h1>All Games</h1>
      <ul>
        {listGames}
      </ul>
    </div>
  )
}
export default GameIndex
