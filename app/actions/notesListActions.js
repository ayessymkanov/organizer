import { ADD_NOTE, SELECT_NOTE, EDIT_NOTE } from '../actionTypes'

export const addNote = (payload) => ({ type: ADD_NOTE, payload })

export const selectNote = (payload) => ({ type: SELECT_NOTE, payload })

export const editNote = (payload) => ({ type: EDIT_NOTE, payload })
