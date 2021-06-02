import apiUrl from '../apiConfig'
import axios from 'axios'

// create a new npc
export const npcCreate = (npc) => {
  return axios({
    url: apiUrl + '/npcs',
    method: 'POST',
    // headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { npc }
  })
}

/// get one npc
export const npcShow = (id) => {
  return axios({
    url: apiUrl + '/npcs/' + id,
    method: 'GET'
  })
}

// get all npcs
export const npcIndex = () => {
  return axios({
    url: apiUrl + '/npcs',
    method: 'GET'
  })
}

// edit an npc
export const npcEdit = (id, npc, user) => {
  return axios({
    url: apiUrl + '/npcs/' + id,
    method: 'PATCH',
    headers: { 'Authorization': `Bearer: ${user.token}` },
    data: { npc }
  })
}

// destroy an npc
export const npcDestroy = (id, npc, user) => {
  return axios({
    url: apiUrl + '/npcs/' + id,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer: ${user.token}` }
  })
}
