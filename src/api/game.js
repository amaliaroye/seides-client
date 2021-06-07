import apiUrl from '../apiConfig'
import axios from 'axios'

// create a new game
export const gameCreate = (game) => {
  return axios({
    url: apiUrl + '/games',
    method: 'POST',
    // headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { game }
  })
}

/// get one game
export const gameShow = (id) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'GET'
    // headers: { 'Authorization': `Bearer: ${user.token}` }
  })
}

// get all games
export const gameIndex = () => {
  return axios({
    url: apiUrl + '/games',
    method: 'GET'
    // headers: { 'Authorization': `Bearer: ${user.token}` }
  })
}

// edit an game
export const gameUpdate = (id, game) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'PATCH',
    // headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { game }
  })
}

// delete an game
export const gameDelete = (id) => {
  return axios({
    url: apiUrl + '/games/' + id,
    method: 'DELETE'
    // headers: { 'Authorization': `Bearer: ${user.token}` }
  })
}
