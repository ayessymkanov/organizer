import { ADD_NOTE, SELECT_NOTE } from '../actionTypes'

export const addNote = (payload) => {
  return {
    type: ADD_NOTE, payload
  }
}

export const selectNote = (payload) => {
  return {
    type: SELECT_NOTE, payload
  }
}