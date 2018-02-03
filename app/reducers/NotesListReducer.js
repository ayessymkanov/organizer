import { ADD_NOTE, SELECT_NOTE } from '../actionTypes'
const INITIAL_STATE = [{id: 1, title: 'hello', desc: 'world'}]

export const addNoteAction = (payload) => {
  return {
    type: ADD_NOTE, payload
  }
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NOTE: {
      return [...state, payload]
    }
    default: {
      return state
    }
  }
}
