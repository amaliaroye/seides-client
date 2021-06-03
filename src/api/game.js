import apiUrl from '../apiConfig'
import axios from 'axios'

// create a new game
export const gameCreate = (game, user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'POST',
    headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { game }
  })
}

/// get one game
export const gameShow = (id) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'GET'
  })
}

// get all games
export const gameIndex = () => {
  return axios({
    url: apiUrl + '/games',
    method: 'GET'
  })
}

// edit an game
export const gameUpdate = (id, game, user) => {
  return axios({
    url: apiUrl + '/npcs/' + id,
    method: 'PATCH',
    headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { game }
  })
}

// delete an game
export const gameDelete = (id, user) => {
  return axios({
    url: apiUrl + '/game/' + id,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer: ${user.token}` }
  })
}
