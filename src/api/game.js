import apiUrl from '../apiConfig'
import axios from 'axios'

// create a new game
export const gameCreate = (game, user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'POST',
    headers: { 'Authorization': `Bearer ${user.token}` },
    data: { game }
  })
}

// get one game
export const gameShow = (id, user) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

// get all games
export const gameIndex = (user) => {
  return axios({
    url: apiUrl + '/games',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

// edit an game
export const gameUpdate = (game, user) => {
  return axios({
    url: apiUrl + '/games/' + game.id,
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${user.token}` },
    data: { game }
  })
}

// delete an game
export const gameDelete = (id, user) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}
