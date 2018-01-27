const addNote = 'addNote'
const INITIAL_STATE = []

export const addNoteAction = (payload) => {
  return {
    type: addNote, payload
  }
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case addNote: {
      return [...state, payload]
    }
    default: {
      return state
    }
  }
}
