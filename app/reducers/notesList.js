import uuidv4 from 'uuid/v4'
import { ADD_NOTE, SELECT_NOTE } from '../actionTypes'

const INITIAL_STATE = {
  notes: [],
  selectedNote: {}
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, {...payload, id: uuidv4()}]
      }
    }
    case SELECT_NOTE: {
      return {
        ...state,
        selectedNote: state.notes.filter(note => note.id === payload)[0]
      } 
    }
    default: {
      return state
    }
  }
}
